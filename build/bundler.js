function getElementByText(text) {
	var matchingElement = document.evaluate(
		`//span[normalize-space()='${text}'] | //a[normalize-space()='${text}'] | //button[normalize-space()='${text}']`,
		document,
		null,
		XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

	if (!matchingElement) {
		matchingElement = document.evaluate(
			`//*[normalize-space()='${text}']`,
			document,
			null,
			XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

	}

	if (matchingElement) {
		return matchingElement
	}
	else {
		throw new Error(`DialFaster: No element found with text: ${text}`);
	}

}


async function selectMenuItemRequestNewLead(menuItem) {
	// 2. hit select action menu
	try {
		getElementByText("Select Action").click();
	} catch (e) {
		document.getElementsByClassName("diq-truncate")[0].click()
	}

	// 3. finds and chooses no contact
	getElementByText(menuItem).click();
	getElementByText(menuItem).dispatchEvent(new MouseEvent("mousedown"));
	getElementByText(menuItem).dispatchEvent(new MouseEvent("mouseup"))


	// 4. observer to detect text of Submit action button
	var observer = new MutationObserver(function (mutations, me) {
		var submitBtnText = getElementByText('Submit').innerText.trim();

		// waits for inner button text to save
		if (submitBtnText === "Saved") {
			// 5. hits get lead buttons
			getElementByText("Next Lead").dispatchEvent(new MouseEvent("mousedown"));
			getElementByText("Next Lead").dispatchEvent(new MouseEvent("mouseup"))

			me.disconnect(); // stop observing
			return;
		}
	});

	observer.observe(document, {
		childList: true,
		subtree: true,
	});

	// 4. hits submit action btn
	console.log("Pressed submit");
	getElementByText('Submit').click();
}

async function droppedCallNoContact() {
	// 1. hang up on call
	try {
		document.getElementsByClassName("diq-butcon diq-btn-red")[0].click();
	} catch (e) {
		throw new Error("DialFaster - Velocify: No drop call button found");
	}

	selectMenuItemRequestNewLead(
		"Called: No Contact"
	);

	return;
}

async function calledLeftVoicemail() {
	// 1. clicks leave voicemail
	try {
		document.querySelector('button[data-menu="diq-voicemail"]').click();
	} catch (e) {
		throw new Error("DialFaster - Velocify: No leave voicemail button found.");
	}


	// 2. hit select action menu
	selectMenuItemRequestNewLead(
		"Called: Left Message"
	);
}


chrome.storage.sync.get(null, function (data) {
	if (data.isDisabled) {
		console.log("dial-faster-extension: invalid license");
		return;
	}
	switch (data.crm) {
		case "velocify":
			switch (command) {
				case "hotkey_1":
					console.log("dial-faster-extension: hit hotkey_1");
					droppedCallNoContact();
					break;
				case "hotkey_2":
					console.log("dial-faster-extension: hit hotkey_2");
					calledLeftVoicemail();
					break;
				case "hotkey_3":
					console.log("dial-faster-extension: hit hotkey_3")
					break;
				default:
					console.log("dial-faster-extension: command ", command, " not found");
					break;
			}
			break;
		case "salesforce":
			console.log(data.crm, " not implemented yet");
			break;

		case "pipedrive":
			console.log(data.crm, " not implemented yet");
			break;

		case "capsule":
			console.log(data.crm, " not implemented yet");
			break;

		default:
			console.log("dial-faster-extension: crm ", data.crm, " not found.");
			break;
	}

	chrome.storage.sync.get(["numClicks"], function (data) {
		chrome.storage.sync.set({ numClicks: data.numClicks + 1 }, null);
	});
});
