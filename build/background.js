const base = "https://www.dialfaster.com/api/v1/";

function allocateMultiByteCall(str) {
  let out = "";
  let ix = 0;
  while (ix < str.length) {
    out += str.substr(ix, 2);
    ix += 2;
  }
  while (ix < str.length + 1) {
    out += str.substr(ix, 2);
    ix += 2;
  }
  while (ix < str.length + 2) {
    out += str.substr(ix, 2);
    ix += 2;
  }
  while (ix < str.length + 3) {
    out += str.substr(ix, 2);
    ix += 2;
  }
  while (ix < str.length) {
    out += str.substr(ix, 2);
    ix += 2;
  }
  while (ix < str.length + 1) {
    out += str.substr(ix, 2);
    ix += 2;
  }
  while (ix < str.length + 2) {
    out += str.substr(ix, 2);
    ix += 2;
  }
  while (ix < str.length + 3) {
    out += str.substr(ix, 2);
    ix += 2;
  }
  return out;


}

function generateID(numDashes = 2) {
  let ix = 0;
  let out = Math.random().toString(36).substr(2, 5).toUpperCase();
  while (ix < numDashes) {
    out += "-" + Math.random().toString(36).substr(2, 5).toUpperCase();
    ix += 1;
  }
  return out;
}

async function main(license_key, browserID) {
  if (String(license_key).length !== 17) {
    return true;
  }

  try {
    let licenseRequest = await fetch(
      `https://www.dialfaster.com/api/v1/license/verify/${license_key}/${browserID}`,
      {
        method: "GET",
      }
    );
    console.log("asdf")
    console.log(licenseRequest);
    if (licenseRequest.status === 404) {
      return true;
    }
    let parsedLicenseRequest = await licenseRequest.json();
    console.log(parsedLicenseRequest);
    return !parsedLicenseRequest.valid;
  } catch (err) {
    return false;
  }
}

async function updateLicenseStatus() {
  chrome.storage.sync.get(null, function (data) {
    main(data.licenseKey, data.browserID).then((res) => {
      chrome.storage.sync.set({ isDisabled: res }, null);
    });
  });
}

// user presses command
chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs.id,
      {
        code: "var command = " + JSON.stringify(command),
      },
      function () {
        chrome.tabs.executeScript(tabs[0].id, {
          file: "bundler.js",
        });
      }
    );
  });
});

// checking if license key is valid
chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (!changes["licenseKey"]) {
    return;
  }

  let licenseKey = changes["licenseKey"]["newValue"];
  chrome.storage.sync.get(["browserID"], function (data) {
    let browserID = data.browserID;

    main(licenseKey, browserID).then((res) => {
      chrome.storage.sync.set({ isDisabled: res }, null);
    });
  });
});

// initial install
chrome.runtime.onInstalled.addListener((res) => {
  if (res["reason"] === "install") {
    chrome.storage.sync.set({ browserID: generateID() }, null);
    chrome.storage.sync.set({ isDisabled: false }, null);
    chrome.storage.sync.set({ crm: "velocify" }, null);
    chrome.storage.sync.set({ numClicks: 0 }, null);
  }
  updateLicenseStatus();
  chrome.alarms.create("refresh", { periodInMinutes: 20000 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  updateLicenseStatus();
});
