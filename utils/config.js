//本地环境配置
const baseUrl = "47.96.85.147:8082"; //你本地测试的接口地址47.96.85.147
const domain = 'http://' + baseUrl + "/app/"; //接口服务地址
const uploadUrl = domain + 'file/upload'; //文件上传地址
const websocketUrl = 'ws://'+"47.96.85.147:8081"+'/ws';//通信地址
const imagePreUrl = "http://qn.muaiweiyi.com/"
const emojiPreUrl = "http://qn.muaiweiyi.com/emoji/"
const wxMpAppId = "wx7d9a0d61c58f8439"
const smsClose = false
const aesOpen = false
const aesKey = "ECPB2CABCDEFGHIJ"
const aesIv = "ECPB2CABCDEFGHIJ"

//线上环境配置


//const baseUrl = "api.linfeng.tech"; //后端接口域名
//const domain = 'https://' + baseUrl + "/app/"; //后端接口地址
//const uploadUrl = domain + 'file/upload'; //文件上传地址
//const websocketUrl = 'wss://'+baseUrl+'/ws' //websocket地址
//const imagePreUrl = "https://demo.linfeng.tech/love/" //静态文件访问地址
//const emojiPreUrl = "https://demo.linfeng.tech/love/emoji/" //表情访问地址
//const wxMpAppId = "微信公众号appid" //微信公众号AppId
//const smsClose = true //短信开关
//const aesOpen = true
//const aesKey = "ECPB2CABCDEFGHIJ"
//const aesIv = "ECPB2CABCDEFGHIJ"

export default {
	baseUrl: baseUrl,
	domain: domain,
	uploadUrl: uploadUrl,
	websocketUrl: websocketUrl,
	imagePreUrl: imagePreUrl,
	emojiPreUrl: emojiPreUrl,
	wxMpAppId: wxMpAppId,
	smsClose: smsClose,
	aesOpen: aesOpen,
	aesKey:aesKey,
	aesIv:aesIv
}