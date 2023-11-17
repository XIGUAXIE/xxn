//关于我们页面 - 充电
function reward(){
	Swal.fire({
	  title: '<strong>您正在为 <u>孙哭川</u> 充电</strong>',
	  html: '<b>请选择您的充电方式</b>',
	  icon: 'info',
	  showCancelButton: true,
	  confirmButtonText:
		'<i class="iconfont xxn-alipay"></i> 支付宝',
	  cancelButtonText:
		'<i class="iconfont xxn-weixin"></i> 微信支付',
	  confirmButtonColor: '#1677FF',
	  cancelButtonColor: '#2AAE67',
	}).then((result) => {
	  if (result.isConfirmed) {
		Swal.fire({
		  title: '感谢您',
		  html: '请打开支付宝 <b>[扫一扫]</b> 以充电',
		  imageUrl: 'https://yife68.gitee.io/icat-pic-2022/03/19/alipay.jpg',
		  imageWidth: 175,
		  imageHeight: 175,
		  imageAlt: 'Custom image'
		}).then((result) => {
		  Swal.fire(
			'充电成功',
			'感谢您的支持',
			'success'
		  )
		})
	  } else if (
		result.dismiss === Swal.DismissReason.cancel
	  ) {
		Swal.fire({
		  title: '感谢您',
		  html: '请打开微信 <b>[扫一扫]</b> 以充电',
		  imageUrl: 'https://yife68.gitee.io/icat-pic-2022/03/19/wechat.jpg',
		  imageWidth: 175,
		  imageHeight: 175,
		  imageAlt: 'Custom image'
		}).then((result) => {
		  Swal.fire(
			'充电成功',
			'感谢您的支持',
			'success'
		  )
		})
	  }
	})
  }

    //获取IP & 订阅

  var xxn = {
	//获取IP
	getIpInfo: function() {
		var fetchUrl = "https://ipapi.co/json"
		fetch(fetchUrl)
		  .then(res => res.json())
		  .then(json =>{
			var country = json.country;
			var ip = json.ip;
			var region = json.region;
			var city = json.city;
			var org = json.org;
			document.getElementById("userAgentIp").innerHTML = ip;
			document.getElementById("userAgentCountry").innerHTML = country;
			document.getElementById("userAgentRegion").innerHTML = region;
			document.getElementById("userAgentCity").innerHTML = city;
			document.getElementById("userAgentIsp").innerHTML = org;
			var uaInfo = navigator.userAgent;
			document.getElementById("userAgentDevice").innerHTML = uaInfo;
		  })
	  },

    //订阅页面
	submitInfo: function() {
		var submitBox = document.querySelector('.submit-box')
		
		if (submitBox.classList.contains('display')) {
		  submitBox.classList.remove('display')
		} else {
		  submitBox.classList.add('display')
		}
	  }
	  // 订阅页点击

  }


  //瀑布流

  function waterfall(a) {
    function b(a, b) {
      var c = window.getComputedStyle(b);
      return parseFloat(c["margin" + a]) || 0;
    }
    function c(a) {
      return a + "px";
    }
    function d(a) {
      return parseFloat(a.style.top);
    }
    function e(a) {
      return parseFloat(a.style.left);
    }
    function f(a) {
      return a.clientWidth;
    }
    function g(a) {
      return a.clientHeight;
    }
    function h(a) {
      return d(a) + g(a) + b("Bottom", a);
    }
    function i(a) {
      return e(a) + f(a) + b("Right", a);
    }
    function j(a) {
      a = a.sort(function (a, b) {
        return h(a) === h(b) ? e(b) - e(a) : h(b) - h(a);
      });
    }
    function k(b) {
      f(a) != t && (b.target.removeEventListener(b.type, arguments.callee), waterfall(a));
    }
    "string" == typeof a && (a = document.querySelector(a));
    var l = [].map.call(a.children, function (a) {
      return (a.style.position = "absolute"), a;
    });
    a.style.position = "relative";
    var m = [];
    l.length && ((l[0].style.top = "0px"), (l[0].style.left = c(b("Left", l[0]))), m.push(l[0]));
    for (var n = 1; n < l.length; n++) {
      var o = l[n - 1],
        p = l[n],
        q = i(o) + f(p) <= f(a);
      if (!q) break;
      (p.style.top = o.style.top), (p.style.left = c(i(o) + b("Left", p))), m.push(p);
    }
    for (; n < l.length; n++) {
      j(m);
      var p = l[n],
        r = m.pop();
      (p.style.top = c(h(r) + b("Top", p))), (p.style.left = c(e(r))), m.push(p);
    }
    j(m);
    var s = m[0];
    a.style.height = c(h(s) + b("Bottom", s));
    var t = f(a);
    window.addEventListener ? window.addEventListener("resize", k) : (document.body.onresize = k);
  }
  
  //短文页面
  var percentFlag = false; // 节流阀
function essayScroll() {
  let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
  const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
  waterfallResult <= 99 || (waterfallResult = 99);

  if (
    !percentFlag &&
    waterfallResult + 100 >= document.documentElement.clientHeight &&
    document.querySelector("#waterfall")
  ) {
    // console.info(waterfallResult, document.documentElement.clientHeight);
    setTimeout(() => {
      waterfall("#waterfall");
    }, 500);
  } else {
    setTimeout(() => {
      document.querySelector("#waterfall") && waterfall("#waterfall");
    }, 500);
  }

  const r = window.scrollY + document.documentElement.clientHeight;

  let p = document.getElementById("post-comment") || document.getElementById("footer");

  (p.offsetTop + p.offsetHeight / 2 < r || 90 < waterfallResult) && (percentFlag = true);
}

function replaceAll(e, n, t) {
  return e.split(n).join(t);
}

var xxnessay = {
  diffDate: function (d, more = false) {
    const dateNow = new Date();
    const datePost = new Date(d);
    const dateDiff = dateNow.getTime() - datePost.getTime();
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;

    let result;
    
    // Check if the suffix object and required properties exist
    const suffix = GLOBAL_CONFIG.date_suffix || {};
    const daySuffix = suffix.day || '天前';
    const hourSuffix = suffix.hour || '小时前';
    const minSuffix = suffix.hour || '分钟前';

    if (more) {
      const monthCount = dateDiff / month;
      const dayCount = dateDiff / day;
      const hourCount = dateDiff / hour;
      const minuteCount = dateDiff / minute;

      if (monthCount >= 1) {
        result = datePost.toLocaleDateString().replace(/\//g, "-");
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + " " + daySuffix;
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + " " + hourSuffix;
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + " " + minSuffix;
      } else {
        result = suffix.just;
      }
    } else {
      result = parseInt(dateDiff / day);
    }
    return result;
  },
  
  changeTimeInEssay: function () {
    document.querySelector("#xxn-bber") &&
      document.querySelectorAll("#xxn-bber time").forEach(function (e) {
        var t = e,
          datetime = t.getAttribute("datetime");
        (t.innerText = xxnessay.diffDate(datetime, true)), (t.style.display = "inline");
      });
  },
  reflashEssayWaterFall: function () {
    document.querySelector("#waterfall") &&
      setTimeout(function () {
        waterfall("#waterfall");
        document.getElementById("waterfall").classList.add("show");
      }, 500);
  },
  commentText: function (e) {
    if (e == "undefined" || e == "null") e = "好棒！";
    var n = document.getElementsByClassName("el-textarea__inner")[0],
      t = document.createEvent("HTMLEvents");
    if (!n) return;
    t.initEvent("input", !0, !0);
    var o = replaceAll(e, "\n", "\n> ");
    (n.value = "> " + o + "\n\n"), n.dispatchEvent(t);
    var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80),
      n.focus(),
      n.setSelectionRange(-1, -1),
      document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show");
  },
};

xxnessay.changeTimeInEssay();
xxnessay.reflashEssayWaterFall();
// 即刻短文处理逻辑

//关于我们页面统计
var CountUp = function (target, startVal, endVal, decimals, duration, options) {
    var self = this;
    self.version = function () {
      return "1.9.2";
    };
    self.options = {
      useEasing: true,
      useGrouping: true,
      separator: ",",
      decimal: ".",
      easingFn: easeOutExpo,
      formattingFn: formatNumber,
      prefix: "",
      suffix: "",
      numerals: [],
    };
    if (options && typeof options === "object") {
      for (var key in self.options) {
        if (options.hasOwnProperty(key) && options[key] !== null) {
          self.options[key] = options[key];
        }
      }
    }
    if (self.options.separator === "") {
      self.options.useGrouping = false;
    } else {
      self.options.separator = "" + self.options.separator;
    }
    var lastTime = 0;
    var vendors = ["webkit", "moz", "ms", "o"];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
        window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
    }
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
    }
    function formatNumber(num) {
      num = num.toFixed(self.decimals);
      num += "";
      var x, x1, x2, x3, i, l;
      x = num.split(".");
      x1 = x[0];
      x2 = x.length > 1 ? self.options.decimal + x[1] : "";
      if (self.options.useGrouping) {
        x3 = "";
        for (i = 0, l = x1.length; i < l; ++i) {
          if (i !== 0 && i % 3 === 0) {
            x3 = self.options.separator + x3;
          }
          x3 = x1[l - i - 1] + x3;
        }
        x1 = x3;
      }
      if (self.options.numerals.length) {
        x1 = x1.replace(/[0-9]/g, function (w) {
          return self.options.numerals[+w];
        });
        x2 = x2.replace(/[0-9]/g, function (w) {
          return self.options.numerals[+w];
        });
      }
      return self.options.prefix + x1 + x2 + self.options.suffix;
    }
    function easeOutExpo(t, b, c, d) {
      return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
    }
    function ensureNumber(n) {
      return typeof n === "number" && !isNaN(n);
    }
    self.initialize = function () {
      if (self.initialized) {
        return true;
      }
      self.error = "";
      self.d = typeof target === "string" ? document.getElementById(target) : target;
      if (!self.d) {
        self.error = "[CountUp] target is null or undefined";
        return false;
      }
      self.startVal = Number(startVal);
      self.endVal = Number(endVal);
      if (ensureNumber(self.startVal) && ensureNumber(self.endVal)) {
        self.decimals = Math.max(0, decimals || 0);
        self.dec = Math.pow(10, self.decimals);
        self.duration = Number(duration) * 1000 || 2000;
        self.countDown = self.startVal > self.endVal;
        self.frameVal = self.startVal;
        self.initialized = true;
        return true;
      } else {
        self.error = "[CountUp] startVal (" + startVal + ") or endVal (" + endVal + ") is not a number";
        return false;
      }
    };
    self.printValue = function (value) {
      var result = self.options.formattingFn(value);
      if (self.d.tagName === "INPUT") {
        this.d.value = result;
      } else {
        if (self.d.tagName === "text" || self.d.tagName === "tspan") {
          this.d.textContent = result;
        } else {
          this.d.innerHTML = result;
        }
      }
    };
    self.count = function (timestamp) {
      if (!self.startTime) {
        self.startTime = timestamp;
      }
      self.timestamp = timestamp;
      var progress = timestamp - self.startTime;
      self.remaining = self.duration - progress;
      if (self.options.useEasing) {
        if (self.countDown) {
          self.frameVal = self.startVal - self.options.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
        } else {
          self.frameVal = self.options.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
        }
      } else {
        if (self.countDown) {
          self.frameVal = self.startVal - (self.startVal - self.endVal) * (progress / self.duration);
        } else {
          self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
        }
      }
      if (self.countDown) {
        self.frameVal = self.frameVal < self.endVal ? self.endVal : self.frameVal;
      } else {
        self.frameVal = self.frameVal > self.endVal ? self.endVal : self.frameVal;
      }
      self.frameVal = Math.round(self.frameVal * self.dec) / self.dec;
      self.printValue(self.frameVal);
      if (progress < self.duration) {
        self.rAF = requestAnimationFrame(self.count);
      } else {
        if (self.callback) {
          self.callback();
        }
      }
    };
    self.start = function (callback) {
      if (!self.initialize()) {
        return;
      }
      self.callback = callback;
      self.rAF = requestAnimationFrame(self.count);
    };
    self.pauseResume = function () {
      if (!self.paused) {
        self.paused = true;
        cancelAnimationFrame(self.rAF);
      } else {
        self.paused = false;
        delete self.startTime;
        self.duration = self.remaining;
        self.startVal = self.frameVal;
        requestAnimationFrame(self.count);
      }
    };
    self.reset = function () {
      self.paused = false;
      delete self.startTime;
      self.initialized = false;
      if (self.initialize()) {
        cancelAnimationFrame(self.rAF);
        self.printValue(self.startVal);
      }
    };
    self.update = function (newEndVal) {
      if (!self.initialize()) {
        return;
      }
      newEndVal = Number(newEndVal);
      if (!ensureNumber(newEndVal)) {
        self.error = "[CountUp] update() - new endVal is not a number: " + newEndVal;
        return;
      }
      self.error = "";
      if (newEndVal === self.frameVal) {
        return;
      }
      cancelAnimationFrame(self.rAF);
      self.paused = false;
      delete self.startTime;
      self.startVal = self.frameVal;
      self.endVal = newEndVal;
      self.countDown = self.startVal > self.endVal;
      self.rAF = requestAnimationFrame(self.count);
    };
    if (self.initialize()) {
      self.printValue(self.startVal);
    }
  };
