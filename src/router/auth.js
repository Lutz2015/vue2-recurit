export default {
	loggedIn: function () {
		return true;
	},
	waploggedIn: function () {
        if (false) {
        } else {
            // if (/huodong[^test]/.test(window.location.host)) {
            //     // online pass
            //     window.location.href='http://wappass.baidu.com?' + 
            //         'tpl=nuomi' +
            //         '&u=' + encodeURIComponent(window.location.href)+
            //         '&smsLoginLink=1' +
            //         '&authsite=1' +
            //         '&time=' + new Date().getTime() +
            //         '&skin=http%3A%2F%2Fm.nuomi.com%2Fstatic%2Flogin%2Fwidget%2Fupdate_passport%2Fpassport.css';
            // } else {
                // qa pass
                window.location.href='http://wappass.qatest.baidu.com?' + 
                    'tpl=nuomi' +
                    '&u=' + encodeURIComponent(window.location.href)+
                    '&smsLoginLink=1' +
                    '&authsite=1' +
                    '&time=' + new Date().getTime() +
                    '&skin=http%3A%2F%2Fm.nuomi.com%2Fstatic%2Flogin%2Fwidget%2Fupdate_passport%2Fpassport.css';
                
            // }
            
        }
    }
}