(function () {
    var isEmpty = function (value) {
        return value.replace(/\s/, '').length > 0;
    };
    var getStyle = function (element, property) {
        if (!!document.defaultView.getComputedStyle) {
            return document.defaultView.getComputedStyle(element, null)[property];
        } else {
            var currentStyle = element.currentStyle;
            return currentStyle[property];
        }
    };
    var addEven = function (ele,type,callback) {
        if (document.addEventListener) {
            addEven = function (ele,type,callback) {ele.addEventListener(type, callback, false);};
        } else {
            addEven = function (ele,type,callback) {ele.attachEvent('on' + type, callback);};
        }
        addEven(ele,type,callback);
    };

    this.autoTextArea = function (dom) {
        if (!(dom && dom.nodeType === 1 && dom.nodeName === 'TEXTAREA')) return;
        var diff = parseInt(getStyle(dom, "paddingTop") || 0) + parseInt(getStyle(dom, "paddingBottom") || 0);
        if (isEmpty(dom.value)) {
            dom.style.height = dom.scrollHeight - diff + "px";
        }
        addEven(dom,"input", function (e) {
            var event = e || window.event;
            var target = event.target || event.srcElement;
            target.style.height = "0";
            target.style.height = target.scrollHeight - diff + "px";
        });
    };
})();