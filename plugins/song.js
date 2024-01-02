const {
  command,
  isPrivate
} = require("../lib");
const fs = require("fs");
const yts = require("yt-search");
const ytdl = require('ytdl-core');
const mYtId = query => {
  let yturlm = query.match(/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/);
  return yturlm;
};
command({
  pattern: "song",
  fromMe: isPrivate,
  type: "downloader"
}, async (message, match) => {
  const _0x1b25de = function () {
    const _0x5b7c93 = {
      AiDLW: function (_0x2eced8, _0x2df042) {
        return _0x2eced8 === _0x2df042;
      },
      BmTlx: "arroO",
      DlvSD: "Fkuxg",
      bUmQA: function (_0x4943c2, _0x1583da) {
        return _0x4943c2 !== _0x1583da;
      }
    };
    _0x5b7c93.mJORj = "NiUJG";
    _0x5b7c93.ahIuf = function (_0x3910ca, _0x4a2765) {
      return _0x3910ca !== _0x4a2765;
    };
    _0x5b7c93.gTaNO = "ojamq";
    _0x5b7c93.vMALv = "icLoK";
    let _0x164c7f = true;
    return function (_0x330a00, _0x58cb32) {
      const _0x16722b = {
        'TWSXR': function (_0x1b2b8e, _0x63549a) {
          return _0x1b2b8e === _0x63549a;
        },
        'HWYgg': "arroO",
        'wqTKg': "Fkuxg",
        'XuLeY': function (_0x376e05, _0xc7c52) {
          return _0x376e05 !== _0xc7c52;
        },
        'OkjYw': _0x5b7c93.mJORj
      };
      if (_0x5b7c93.ahIuf(_0x5b7c93.gTaNO, _0x5b7c93.vMALv)) {
        const _0x3fed0a = _0x164c7f ? function () {
          if (_0x58cb32) {
            if (_0x16722b.OkjYw !== _0x16722b.OkjYw) {
              return _0x30c1c0;
            } else {
              const _0x4528ed = _0x58cb32.apply(_0x330a00, arguments);
              _0x58cb32 = null;
              return _0x4528ed;
            }
          }
        } : function () {};
        _0x164c7f = false;
        return _0x3fed0a;
      } else {
        const _0x123dd6 = _0x37132e.apply(_0x2bc51d, arguments);
        _0x35c895 = null;
        return _0x123dd6;
      }
    };
  }();
  const _0x3d8d99 = _0x1b25de(this, function () {
    return _0x3d8d99.toString().search("(((.+)+)+)+$").toString().constructor(_0x3d8d99).search("(((.+)+)+)+$");
  });
  _0x3d8d99();
  const _0x1c01a1 = function () {
    let _0x74305c = true;
    return function (_0x575fe7, _0x428838) {
      const _0x37aedf = _0x74305c ? function () {
        if (_0x428838) {
          const _0x5ed219 = _0x428838.apply(_0x575fe7, arguments);
          _0x428838 = null;
          return _0x5ed219;
        }
      } : function () {};
      _0x74305c = false;
      return _0x37aedf;
    };
  }();
  (function () {
    _0x1c01a1(this, function () {
      const _0x554b1a = new RegExp("function *\\( *\\)");
      const _0x17dfaf = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
      const _0x3a71bb = _0x2ca24e("init");
      if (!_0x554b1a.test(_0x3a71bb + "chain") || !_0x17dfaf.test(_0x3a71bb + "input")) {
        _0x3a71bb('0');
      } else {
        _0x2ca24e();
      }
    })();
  })();
  const _0x5ba403 = function () {
    let _0x18b316 = true;
    return function (_0x48ba75, _0x59ed75) {
      const _0x46ac34 = _0x18b316 ? function () {
        if (_0x59ed75) {
          const _0x161ce0 = _0x59ed75.apply(_0x48ba75, arguments);
          _0x59ed75 = null;
          return _0x161ce0;
        }
      } : function () {};
      _0x18b316 = false;
      return _0x46ac34;
    };
  }();
  const _0x1537e5 = _0x5ba403(this, function () {
    let _0x2a7845;
    try {
      const _0x14dbb5 = Function("return (function() {}.constructor(\"return this\")( ));");
      _0x2a7845 = _0x14dbb5();
    } catch (_0x36c0a2) {
      _0x2a7845 = window;
    }
    const _0xc387db = _0x2a7845.console = _0x2a7845.console || {};
    const _0xe9642a = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let _0x17bc0c = 0; _0x17bc0c < _0xe9642a.length; _0x17bc0c++) {
      const _0x4b6ed4 = _0x5ba403.constructor.prototype.bind(_0x5ba403);
      const _0x5cb4cf = _0xe9642a[_0x17bc0c];
      const _0x2f7d1e = _0xc387db[_0x5cb4cf] || _0x4b6ed4;
      _0x4b6ed4.__proto__ = _0x5ba403.bind(_0x5ba403);
      _0x4b6ed4.toString = _0x2f7d1e.toString.bind(_0x2f7d1e);
      _0xc387db[_0x5cb4cf] = _0x4b6ed4;
    }
  });
  _0x1537e5();
  await message.reply("*Searching Your Song!!! Please Wait•••*");
  match = match || message.reply_message.text;
  (function () {
    let _0x1908bc;
    try {
      const _0x3dbe7b = Function("return (function() {}.constructor(\"return this\")( ));");
      _0x1908bc = _0x3dbe7b();
    } catch (_0x36ef1a) {
      _0x1908bc = window;
    }
    _0x1908bc.setInterval(_0x2ca24e, 4000);
  })();
  if (!match) {
    return await message.reply("*Enter Value Song Name*");
  }
  const dMp3 = async _0x1f1019 => {
    try {
      await ytdl.getInfo(_0x1f1019);
      ytdl(_0x1f1019, {
        'filter': "audioonly"
      }).pipe(fs.createWriteStream(`${Math.floor(Math.random() * 10000)}${".mp3"}`)).on("finish", async () => {
        await message.sendMessage(fs.readFileSync(`${Math.floor(Math.random() * 10000)}${".mp3"}`), {
          'mimetype': "audio/mpeg",
          'quoted': message
        }, "audio");
        fs.unlinkSync(`${Math.floor(Math.random() * 10000)}${".mp3"}`);
      });
    } catch (_0x4e47f8) {}
  };
  var songId = await mYtId(match);
  if (songId !== null) {
    let Link = "https://youtu.be/" + songId[1];
    dMp3(Link);
  } else {
    let search = await yts(match);
    dMp3(search.all[0].url);
  }
  function _0x2ca24e(_0x484189) {
    function _0x30a990(_0x3e5608) {
      if (typeof _0x3e5608 === "string") {
        return function (_0x7751ac) {}.constructor("while (true) {}").apply("counter");
      } else {
        if (('' + _0x3e5608 / _0x3e5608).length !== 1 || _0x3e5608 % 20 === 0) {
          (function () {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function () {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      _0x30a990(++_0x3e5608);
    }
    try {
      if (_0x484189) {
        return _0x30a990;
      } else {
        _0x30a990(0);
      }
    } catch (_0x140859) {}
  }
});
