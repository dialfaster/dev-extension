(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,t,s){},,function(e){e.exports=JSON.parse('{"a":"0.28.0"}')},,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var c=s(10),n=s(0),r=s(1),a=s.n(r),i=s(7),l=s.n(i),o=(s(17),s(3));s(18),s(19),s(6),s(20);var d=function(e){var t=e.hotkey,s=e.descr,c=e.num;return Object(n.jsxs)("div",{className:"shortcut-option",children:[Object(n.jsx)("div",{className:"shortcut-number",children:c}),Object(n.jsx)("input",{className:"hotkey-check-box",type:"checkbox",checked:!0,readOnly:!0}),Object(n.jsx)("div",{className:"hotkey",children:t}),Object(n.jsx)("div",{className:"hotkey-descr",children:s})]})},A={velocify:{disabled:!1,hotkeys:[{ix:1,descr:"Called - No Contact",hotKey:{windows:"Alt + Z",mac:"\u2318 + J"}},{ix:2,descr:"Called - Left Message",hotKey:{windows:"Alt + X",mac:"\u2318 + K"}}]},salesForce:{disabled:!0,hotkeys:[]},salesLoft:{disabled:!0,hotkeys:[]},outreach:{disabled:!0,hotkeys:[]},yesWare:{disabled:!0,hotkeys:[]}};var b=function(e){var t=e.crm,s="windows";return"MacIntel"===window.navigator.platform&&(s="mac"),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"shortcut-menu",children:[Object(n.jsx)("div",{className:"shortcuts",children:"Shortcut"}),Object(n.jsx)("div",{className:"shortcut-titles",children:"Title"})]}),Object(n.jsx)("div",{children:A[t].hotkeys.map((function(e,t){return Object(n.jsx)(d,{num:t+1,descr:e.descr,hotkey:e.hotKey[s]},e.descr)}))})]})},j=s(27);s(21);function u(e){var t=e.icon,s=e.text,c=e.onClick,r=e.direction,a=void 0===r?"row":r;return Object(n.jsxs)("button",{onClick:c,className:"new-button",style:{flexDirection:a},children:[t,Object(n.jsxs)("div",{className:"button-text",children:[s," "]})]})}function h(e){var t,s=e.setPage,c=e.disabled,r=e.numClicks,a=e.errorMsg,i=e.crm,l=Object(n.jsx)(b,{crm:i});c&&(a&&(t="~".concat(a,"~")),l=Object(n.jsxs)("div",{className:"disabled-warning",children:[Object(n.jsx)("div",{children:"Extension Disabled: See Settings Tab"}),Object(n.jsx)("div",{className:"disabled-warning-subtext",children:t})]}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"title-area",children:Object(n.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqgAAABiCAMAAACritGVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEX////2+v+10P+Nt/+Xvf/N3//7/f++1v+wzf/q8v+60/+nx//z9//v9f+sy//J3P/a6P+Uu//g6/+ixP/R4v/m7/+ewf/W5f/E2v+Ruf/39/f///8H8JT1AAAAGnRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQrjSUAAAABYktHRACIBR1IAAAAB3RJTUUH5QEZFBom4yNlvgAAAAFvck5UAc+id5oAAA3rSURBVHja7Z3ZYqIwFIYFWUQUcUEp7/+gU0UrWc+SGOg0/9VMSXIOyWf2hNUqKioqKioqKup/UJKuh4eyfG5XoqJMKoapyrndiYrSSuR0GDZzOxQVWNW92LdzewGqlkAddnN7FBVS+W8peJnToZ7bo6hgKkqh6Ku5/bFor4A6zO1SVCDtG6XsD3P7ZNQhgvpH1R4HnZqF9gCagKAmp8Nmodnw11RsB6Oy09ze6XRWHS0850l12dbrV+KLzIS/pu462HXwzIAHaVzee0x+IyceQZ1dtwGh2icFPvThGvUYQV2WkhSD6UO3uX0V9OE+6p8Dtbhd27l9MAts80WlXuoslKlzf7Ib65cKKj47FzP7V1weHPRz+2F0j0TpQ1cPmYu3tu7NsH54HjUEqD79Zau4ZC9/lglqssHnqKCLq2WauRs6mavP7PkToBZ5NvVniaAWZ3x+KnLsrlHNGVBV3sDrcO8PgKo0qEsENcNnp0ZuSJDNHbUdAHn3lN+l/j8AqtKkLhDUyonTIXMyzjCoXRYSSfW83SsAqI1fj8n6DaC6NPx3JS7GOQb1dXhSPnm6et/hHwDUuU8l/AJQC3RmGuRUfbEshl4aCwDq3LNTvwDUEp2ZJrlYZxk8Bs6iAKAGfiNFvwBUZ06HNrj1wCtDEdQF6OQO6peDeabJsHkUQV2A3OamRjlsz2RabIPm0edBXQd9H40WD2oCZyI8K+Bw5pP723B9793p1vfbNE3L/tBCP7TPg2qcndp1336WTz8pU9ZFW9bZzwba9XXT3yrLIJQLanfJH9nY9/mJP6NeHMBhB7xfqkGwzB+GK0mlopr3bmW0xeLU16bnXW/YevNVmqfZPg+qsuBW9Yb6Yb2F26/EMkCuc+170kHd6Y2cb2QYuns895xMEBOt/CV/JSlNmELza9LOO+5u6asnoymNDvxRbgx57BFURJwK9LO2Tl0jthQ3BT60tp7cW3faldp8/NniJv4qK2OB0V6q/i5/+M2xBccsyU4JJjUVrVzxSu+dbOF3uOuqzeJwoCbIycKjsdrCDY7dQIVtpBrP3nsxJ87/7Hvr7BmzBk3eGxq4SmXPVyNL8gyEUx4nwHOjWo31cKDi/TQ0YjUu9jsCHdQEhkYXbQLqeyfGu/Gw78SH68qaEIwjZEmq/eTCngwbVF2nYomg6juR2MjvGGRQO0z6g6aKnOxur9RStfeJG9Dc2HOH9/5zh1PYklTCneyP+aBq6tRwoKIqq6c0v6gvZNTJRiIqqC3aPxmJ6TGMxx+EHoSus0Aov/MYbg8G5E67YUtSCVfaH0ugkjbeKMPqcKCSNrArrWuPjTnJPCKohPWho8W7Oy65EPpsy5YcNPbyEq5SQ4N6tT+WQD0MBCkrbeFARR0CNiWG3150IlgUQEVMVb4l/eCFn1Gx2gKZbs1GWT+Yw1Uqc/kdW5JAKSlPJVBh/y05HBBU2lY2qUrFNxuTSDRQSe5JlaQA6lFx1pIr8I7pt5PgSivzkBK2JAd7QOVpAsa3SF4nCjiPSvLzyo3LBZVW4Usv21MCCwJ/gZOMgKsk3v5prL/Ai4HeuOTwYkEVUyNQxAWV5p3UMrFBhZuZqY9glcrbP431F3gx5akbqNKANSCo2HG75i3x24umNTE4ip9AQKxQpRE2G1RwjCi0LHA/YdGgihPh1zS/nE77fXW65KVmoCiBGBBUcfn0ujk8/bzlpaYBvFhtDcN6k3fvai3p8nFWQfOJA9Rav67Uv5qy/5G03CDOrrNBBckTl5uOUPAWW3qcklTNFdbHMqjPCY5rr1tDU/o1UkkGBPX08rPDJNdYbRmMdRvNqigGVLUJzqRsbm0OcEEFZ8Sk46VglcraP431VzW3sz6WQd0NQ2pc51VAlcarAUH9hqHp0MkdrbYobRwG1N5q/i4XUI1LRmCXRi5XsPvE2T/NB7WzPiYN7RRQpd9o2N1TzOQ0U5yElDGgKukrNbMLqKYSA6dulfP64CIvZ/80H9TW+tgNVGnD/a8A1e3+LRaoSgg2qJZ9olsIO7UBAheiPWe9NZy43cYzqJIXHkHNNEqxqVlzS9M1I2QBAtQCTp8Hqv3bEBB0mrMBYJXK2D/NB9U+4l0qqFp5ya2dQ7ooUG9w+gxQ18ABFnBKTNej/0CVik1CtZVbH/89UAuHdFGgbuD0yaBmYDlBq1LaITw4UUDf7IfNXNXWwfr474H68VF/BqdPBRUx/IaG8PopEijH6eN+bOaqtnrr4wjqt3L8wQsEqAi/pe144phUAdW6s+8l4ACZ4Zw5VKWi8wWX9dZccgA16fKysS5giOHnAjXpLmWTYWOawtQ94hyzH1CljfjAyhRqlgiYnTKVhD0W4+5EbKGpxlhN/67ELaaLscKDmvTgQqAS07rpOgNo9QOq9Fw8B8UD1b4iary4w16lMm4gQBSaIZfog6kK/zUNIK8+C+oeeUJPiglvcCvNYwgvoMrNtGiOCaoVOXNB2GJx7qUBX95olzo9hT2UpvEiKKikPd5kY6YZRHdQk4P9ORdU62u9wuTP5anDzyfQbLvCWmzx2bxAe0uc8IfPMZq9CAnqlu8n7jxTqXWUBSogKQkuqJYVrbEcHp9BH8N+/2t9At0lU7pyAbW1PpZBpRzvHGYElfatL8lP5FkUnfefABUCDglqYbfw/KLPGHa8v+PRbJhXCkqcXV+gVtbHEqjUOwvnApVW7yu5hYyl2eP+AVBbT6CaL9X4tlC9SnYK6tgbNzrGOtoPZb05lyjb/Mhfe5sJVPJltbI9ZJ2q7i7wD6pigw2qsde+at8NpQjqMDQ7U5WKmr71CKr9cQLEBvQxUInBaX6u0PdDKGMq76Cq7SsbVJNlofkZQ06v7jK1orzrp7AlCZSR8lQAVf/bem9fWtsTDwZqB/iJWMTEXNZwl9z8+QZVs7LJBxVzVmsMibljDmuVV5KAPeVpYn3aiokHXEK1hlZGUhdWcph5WLn98wuqduMeH1SM6TEgAlTmFanYkhzsAZWnVlCVkgW8CAWqHLhgJyd92NRYsD/yCOrZ0LY6gApfN40HlXlLGjbrgZxWnk5BlXdqtnLiCwFVnofJ3ZJbJRdL1Splgh9Qv9LW7I4DqIibhMaAMKjca/yxWT/YAypPp6DmkImFgCqP+Qu35J4qTrqD1vJFoSxQs+xc15s0LXPM5wUcQEXffQaDyv0wChvUs/3xFNQUMrEQUHswLAdUQ0wpqp9NKVa5gAqvf4/hQFDZ39Jjg9rbH09BzSATCwG1AcPOCio0NwLJBVS43zEGA0Flf0qPDWpnfzwFdQ2ZWAioZzDsrKA2fOsPOYEK3hs6BgNBpblMz3oIJSuooImFgArW/POCmvOtP+QEKnhR2hgMApX/mTfky38B4SKoVEfooO741h9yAhVs+8dQEKgeP4imDaWu1UNXg05B/YJMdIAXS2n6E1JyQDmLz/1cQGGVG6jQNt0xFAQqzWPqy3eaPXo3IJkpqFfIBNSoBQJ1A4U92ZMrLXNEwUEtlMrLDVSoSn0AAc23diSLdvPiJSLGAzNQMlNQwdH0EUg+EKglFLa2J/f9/9TUtvkANR0gB596rIspewkdQSV9hgFHDUVMixmUzBTULeCuZpJODKCAusWeDiNlFbQwAdwu9XyNY66BVa2LpXNDCqjXrgDtawwVt1e1oNwM4QgqF5VpsdEM+rBeQclMQbVei6DfwiEG0dfrmN0NQMKiKrufG8DP7fRB3V/abr+v2rzUr6NK20VNR1iF3Xq6ANm13qR9mTY11MNyBZW6+R0qVZo8mVQCTEGlfWpEk74eVMyJBlpeuflJu1Vd+qmbQBUGrcgPtRpe1RVURjGK4hw+dQR1DyaTuBnBgJqvYIGl5xFUlzc0girARENFXlV3BdW57ecu8/ONN3AyzM8w6ItRvyWi9Q4q/jy/LjlSRPnjtaaNdD0qlFbyD9kZVOTpBVRmhQEVkYwAKulIv8aC/sgd5kgDLbMQ35s3J0f75pvtQ6VTQdOAFtWQCfKOO3L2CGqDg1ogkvF6ZkrfN8OscgAJO+fGJC5p+kZhxFRbSb9G0ulD76BSPx9EyfoPgFpgkhFBJTcaYup7RBgvoJKr/klc0o0AimVT91PO7C3fiDuoTlUqZkjh03SNS0Y61w9fOVYIRYXxkvV6QHi4l5qsDMlRMjFBeGrwl/D9aymmB1BJfWRJ/GV+cvbe1SGTkYoCGq/eT6NNpzExGcR6Pcf8uE9Z7/TJETJRd4Oc4fCqGnCLNiOt33kAlfRxa1GMmyYpBSNq3aGTkcvCSurzgu5JLw8Tm/V6YAzb3UPrcYLlpksOP3V0LXCumvxF91OlFREPoDpM+jvNTa0ooF5bSjJqpbE1JXz8eYd3B0GOrOulsl4PjmIcFL0/y1DrkrshC9E0WaGvrbRBMRP/2U2O5QNU+EOnBrmsnupLUtXXuWyhDoZSSJrWrdDOMgl3hr7+qH7TXS1G1OkbXMFLfmo7GqnOT2k9fbeF8vJsqVgKTUc+M4S1j06vB1TngnVZWXIh3iP3rablWJpTlTgUOF8IPez9ZLvoeuuwYQxjS/p2b07w82QacaxL6MMGifBTrnNrc7kvNVX4dXtzHLSgsgd5H/fDI0oZL027rmJcjv2M6drZCeLnqjgd7htFsvuJ5qa8dfjS2nV7StEm++pUkWL4UYeYfjj2AQsrKsqgwtoL+H3tfdR/LH0v4Fe391H/q8ReQGzvo5arVy+gYV8wERUVSBU4iRkVFRUVFRUVFRUVFRUVFbUA/QNN4CABHjJHMAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0yNVQyMDoyNjoyOCswMDowMKfli4oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMjVUMjA6MjY6MjgrMDA6MDDWuDM2AAAAAElFTkSuQmCC",alt:"logo",className:"logo-img"})}),Object(n.jsx)("div",{className:"horizontal-bar",children:"\xa0"}),l,Object(n.jsx)("div",{className:"horizontal-bar",children:"\xa0"}),Object(n.jsxs)("div",{className:"bottom-area",children:[Object(n.jsxs)("div",{children:[String(r)," clicks logged"]}),Object(n.jsx)("div",{className:"settings-button-area",children:Object(n.jsx)(u,{direction:"row-reverse",onClick:function(){return s("settings")},text:"Settings",icon:Object(n.jsx)(j.a,{size:15})})})]})]})}s(24);var O=s(28),v=s(29),g=s(30),m=s(31),N=s(8);function f(e){var t=e.licenseKey,s=e.setLicenseKey,c=e.setCrm,a=e.crm,i=e.setPage,l=Object(r.useState)(!0),d=Object(o.a)(l,2),b=d[0],j=d[1];Object(r.useEffect)((function(){chrome.storage.sync.set({licenseKey:t},null)}),[b,t]);var h=Object(n.jsx)(O.a,{size:15});return b&&(h=Object(n.jsx)(v.a,{size:15})),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"settings-title",children:Object(n.jsx)("h3",{children:" Settings "})}),Object(n.jsx)("div",{className:"horizontal-bar",children:"\xa0"}),Object(n.jsxs)("div",{className:"api-key",children:[Object(n.jsx)("div",{children:"License Key"}),Object(n.jsx)("input",{value:t,onChange:function(e){return s(e.target.value)},className:"api-key-input",disabled:b})]}),Object(n.jsxs)("div",{className:"api-key",children:[Object(n.jsx)("div",{children:"Type"}),Object(n.jsx)("select",{name:"crm",value:a,onChange:function(e){return c(e.target.value)},disabled:b,className:"type-dropdown",children:Object.keys(A).map((function(e){return Object(n.jsx)("option",{value:e,disabled:A[e].disabled,children:e},e)}))})]}),Object(n.jsxs)("div",{className:"api-key",children:[Object(n.jsx)("div",{children:"Version"}),Object(n.jsx)("div",{children:N.a})]}),Object(n.jsx)("div",{className:"lock-area",children:Object(n.jsx)(u,{direction:"row-reverse",onClick:function(){return j(!b)},text:b?"Unlock to make changes":"Lock to save",icon:h})}),Object(n.jsx)("div",{className:"horizontal-bar",children:"\xa0"}),Object(n.jsxs)("div",{className:"api-key",children:[Object(n.jsx)(u,{onClick:function(){return i("main")},text:"Back",icon:Object(n.jsx)(g.a,{size:15})}),Object(n.jsx)(u,{direction:"row-reverse",text:"Help",icon:Object(n.jsx)(m.a,{size:15}),onClick:function(){chrome.tabs.create({active:!0,url:"https://www.dialfaster.com/frequently-asked-questions"})}})]})]})}var p=s(5),x=s.n(p),k=s(9);function q(e,t){return{isDisabled:!e,msg:t}}function B(){return(B=Object(k.a)(x.a.mark((function e(t,s){var c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(String(t).length){e.next=2;break}return e.abrupt("return",q(!1,"Input a license key"));case 2:if(17===String(t).length){e.next=4;break}return e.abrupt("return",q(!1,"No valid license key found"));case 4:return e.prev=4,e.next=7,fetch("https://www.dialfaster.com/api/v1/license/verify/".concat(t,"/").concat(s),{method:"GET"});case 7:if(404!==(c=e.sent).status){e.next=10;break}return e.abrupt("return",q(!0,"404 Error, temporary license given"));case 10:return e.next=12,c.json();case 12:return n=e.sent,e.abrupt("return",q(n.valid,n.msg));case 16:return e.prev=16,e.t0=e.catch(4),e.abrupt("return",q(!1,"Unknown Error"));case 19:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}var V=function(e){var t,s=e.browserID,c=Object(r.useState)("main"),a=Object(o.a)(c,2),i=a[0],l=a[1],d=Object(r.useState)(e.crm),A=Object(o.a)(d,2),b=A[0],j=A[1],u=Object(r.useState)(e.isDisabled),O=Object(o.a)(u,2),v=O[0],g=O[1],m=Object(r.useState)(e.licenseKey),N=Object(o.a)(m,2),p=N[0],x=N[1],k=Object(r.useState)(null),q=Object(o.a)(k,2),V=q[0],y=q[1];function U(e){l(e)}return Object(r.useEffect)((function(){(function(e,t){return B.apply(this,arguments)})(p,s).then((function(e){g(e.isDisabled),y(e.msg)}))}),[p,s]),"main"===i&&(t=Object(n.jsx)(h,{crm:b,setPage:U,disabled:v,errorMsg:V,numClicks:e.numClicks})),"settings"===i&&(t=Object(n.jsx)(f,{crm:b,setCrm:j,setPage:U,licenseKey:p,setLicenseKey:x})),Object(n.jsx)("div",{className:"main",children:t})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,32)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),r(e),a(e)}))};chrome.storage.sync.get(null,(function(e){l.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(V,Object(c.a)({},e))}),document.getElementById("root"))})),y()}],[[26,1,2]]]);
//# sourceMappingURL=main.919b3f6c.chunk.js.map