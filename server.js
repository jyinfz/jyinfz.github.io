var http = require("http");//ӳ��һ��ģ��
var fs = require("fs");//���� �ļ� ϵͳģ��
var ws = require("socket.io");//����socket.ioģ��

	

var server = http.createServer(function(req,res){

	var html = fs.readFileSync("./client.html");//����fsģ���е�ͬ�����ļ�����
	
	res.end(html);

}).listen(3000);//�����˿�

var io = ws(server);// http������ws��������� ����io����ʵ��\

io.on("connection",function(socket){
	//�������û�����io��������ʱ��
	console.log("�����û����뷿��");
	//���տͻ��˵���Ϣ
	socket.on("message",function(obj){
		console.log(obj);
		io.emit("message",obj);//����������Ϣ�������Լ����ӵĿͻ��� �㲥

	});

});