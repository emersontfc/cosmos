const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = false // Ler automaticamente Mensagens
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "Cosmos-Mdོ" //namabot kalian
global.ownername= "ᴹᴿ᭄ Workx ×፝֟͜×" //nama kalian
global.myweb ="https://workx.tech/" //bebas asal jan hapus
global.youtube = "https://instagram.com/emersontfc" //bebas asal jan hapus
global.github = "https://zeeone-ofc.github.io/" //bebas
global.email = "zeeoneofc@gmail.com" //bebas
global.region = "Maputo" //bebas
global.ownernomer = "258848858288" // nomor wa kalian
global.ownernomerr = "+258848858288" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["258848858288","258846666288","258848858288"] //ganti agar fitur owner bisa di gunakan
global.packname = '© Cosmos-Mdོ' //sticker wm ubah
global.author = 'Criado Por Workx' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Pronto, amigo~',
    admin: 'Este comando só pode ser usado pelo administrador !',
	botAdmin: 'Este comando só pode ser usado quando o bot se torna administrador !',
    owner: 'Este comando só pode ser usado pelo proprietário !',
    group: 'Este comando só pode ser usado em grupos !',
    private: 'Este comando só pode ser usado em privado !',
	bot: 'Recursos especiais do usuário do número do bot',
    errtoimg: 'Desculpe, atualmente não é compatível com o adesivo gif !',
    wait: '⏳ Sendo processado',
	lockCmd: 'Recurso não habilitado pelo proprietário!',
	example1: 'Bem vinda @user ao Grupo @subject Não se esqueça de ler as regras @desc\n\nNota :\n1. @user (Mention User Join)\n2. @bio (Obter inscrição de usuário de biografia)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
