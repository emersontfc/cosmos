exports.private = () =>{
	return`O recurso só pode ser usado em bate-papo privado`
	}
exports.wait = () => {
    return `⏳ Aguarde um pouco por favor ~`
}

exports.ok = () => {
    return `✅ Pronto, Ok?~`
}

exports.err = () => {
    return `⚠️ Falha  ao Carregar recursos`
}
exports.erorLink = () => {
    return `⚠️ Link Incorreto ou Parece haver um Erro`
}
exports.media = () => {
    return `Selecione a mídia que deseja baixar`
}
exports.replyImg = (prefix, command) => {
    return `Enviar/responder foto com legenda${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Formato incorreto ❎ Por favor, verifique como usar em *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Digite a mensagem que deseja transmitir!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Comando *${cmd}* não registrado em*${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Este comando é para o Chefe`
}

exports.doneOwner = () => {
    return `✅  ️Está feito, Chefe~`
}

exports.groupOnly = () => {
    return `👥 Este comando só pode ser usado em grupos!`
}

exports.adminOnly = () => {
    return `🙅  Este comando só pode ser usado por administradores de grupo!`
}

exports.nhFalse = () => {
    return `Código inválido!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 SALÃO DA VERGONHA 」 ──*
    
    Totalmente bloqueado: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ O usuário não é um administrador! ❎`
}

exports.adminAlready = () => {
    return `❎Não foi possível promover um usuário que é administrador!`
}

exports.botNotAdmin = () => {
    return `Torne-me um administrador primeiro! 🙏`
}

exports.received = (pushname) => {
    return `
Oi ${pushname}!
Obrigado por relatar, receberemos seu relatório em breve.`
}

exports.videoLimit = () => {
    return `O tamanho do arquivo é muito grande!`
}

exports.notNum = (q) => {
    return `"${q}", não números!`
}
exports.menunya = (salam, pushname) =>{
	return`Oi ${pushname} 👋 prazer em ve-lo ${salam} , 
    Eu sou Cosmos-Md, este bot é um Beta Multi-Device Whatsapp.
    Se você encontrar algum tipo de bug ou erro, por favor, entenda.
    denuncie o dono para que seja corrigido imediatamente 🙏      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Oi ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚Este é o meu menu:*

╭─❒ 「 Info do Cosmos 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}sc
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 Dono 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}setmenu [query]
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}sendsesi
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}broadcast [text]
├ ${prefix}bc [text]
├ ${prefix}bcgc [text]
├ ${prefix}nsfw [on/off]
├ ${prefix}antiviewonce [on/off]
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [reply pesan bot]
╰❒ ${prefix}setppbot [reply image]


╭─❒ 「 Banco de Dados 」 
├ ${prefix}setcmd [reply stiker]
├ ${prefix}delcmd [reply stiker]
├ ${prefix}listcmd
├ ${prefix}absen
├ ${prefix}cekabsen
├ ${prefix}deleteabsen
├ ${prefix}absenstart
├ ${prefix}addmsg [nama file]
├ ${prefix}getmsg [nama file]
├ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]


╭─❒ 「 Grupos 」 
├ ${prefix}listonline
├ ${prefix}sider
├ ${prefix}infochat
├ ${prefix}setdesk [text]
├ ${prefix}setppgrup [reply image]
├ ${prefix}antilink [on/off]
├ ${prefix}revogar
├ ${prefix}sair
├ ${prefix}add [258***]
├ ${prefix}remover @tag
├ ${prefix}sair
├ ${prefix}linkgc
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]


╭─❒ 「 Marcar 」 
├ ${prefix}stickertag
├ ${prefix}videotag [query]
├ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]

╭─❒ 「 Stalkear 」 
├ ${prefix}igstalk [username]
├ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]


╭─❒ 「 Pesquisa 」 
├ ${prefix}ytsearch [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」 
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Efeito de Imagem」 
├ ${prefix}wanted [resposta imagem/adesivo]
├ ${prefix}utatoo [resposta imagem/adesivo]
├ ${prefix}unsharpen [resposta imagem/adesivo]
├ ${prefix}thanos [resposta imagem/adesivo]
├ ${prefix}sniper [resposta imagem/adesivo]
├ ${prefix}sharpen [resposta imagem/adesivo]
├ ${prefix}sepia [resposta imagem/adesivo]
├ ${prefix}scary [resposta imagem/adesivo]
├ ${prefix}rip [resposta imagem/adesivo]
├ ${prefix}redple [resposta imagem/adesivo]
├ ${prefix}rejected [resposta imagem/adesivo]
├ ${prefix}posterize [resposta imagem/adesivo]
├ ${prefix}ps4 [resposta imagem/adesivo]
├ ${prefix}pixelize [resposta imagem/adesivo]
├ ${prefix}missionpassed [resposta imagem/adesivo]
├ ${prefix}moustache [resposta imagem/adesivo]
├ ${prefix}lookwhatkarenhave [resposta imagem/adesivo]
├ ${prefix}jail [resposta imagem/adesivo]
├ ${prefix}invert [resposta imagem/adesivo]
├ ${prefix}instagram [resposta imagem/adesivo]
├ ${prefix}greyscale [resposta imagem/adesivo]
├ ${prefix}glitch [resposta imagem/adesivo]
├ ${prefix}gay [resposta imagem/adesivo]
├ ${prefix}frame [resposta imagem/adesivo]
├ ${prefix}fire [resposta imagem/adesivo]
├ ${prefix}distort [resposta imagem/adesivo]
├ ${prefix}dictator [resposta imagem/adesivo]
├ ${prefix}deepfry [resposta imagem/adesivo]
├ ${prefix}ddungeon [resposta imagem/adesivo]
├ ${prefix}circle [resposta imagem/adesivo]
├ ${prefix}challenger [resposta imagem/adesivo]
├ ${prefix}burn [resposta imagem/adesivo]
╰❒ ${prefix}beautiful [resposta imagem/adesivo]


╭─❒ 「 Efeito Sticker 」 
├ ${prefix}jail [resposta imagem/adesivo]
├ ${prefix}red [resposta imagem/adesivo]
├ ${prefix}bloo [resposta imagem/adesivo]
├ ${prefix}blue [resposta imagem/adesivo]
├ ${prefix}sepia [resposta imagem/adesivo]
├ ${prefix}green [resposta imagem/adesivo]
├ ${prefix}glass [resposta imagem/adesivo]
├ ${prefix}invert [resposta imagem/adesivo]
├ ${prefix}blurple [resposta imagem/adesivo]
├ ${prefix}blurple2 [resposta imagem/adesivo]
├ ${prefix}wasted [resposta imagem/adesivo]
├ ${prefix}passed [resposta imagem/adesivo]
├ ${prefix}triggered [resposta imagem/adesivo]
├ ${prefix}comrade [resposta imagem/adesivo]
├ ${prefix}greyscale [resposta imagem/adesivo]
├ ${prefix}threshold [resposta imagem/adesivo]
├ ${prefix}brightness [resposta imagem/adesivo]
╰❒ ${prefix}invertgreyscale [resposta imagem/adesivo]


╭─❒ 「 Downloaders 」 
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytshortmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}ytshorts [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
├ ${prefix}soundcloud [link]
├ ${prefix}gitclone [link repo]
├ ${prefix}mediafire [link]
╰❒ ${prefix}twitter link

╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2 text|text2
├ ${prefix}horror text|text2
├ ${prefix}game8bit text|text2
├ ${prefix}layered text|text2
├ ${prefix}glitch2 text|text2
├ ${prefix}coolg text|text2
├ ${prefix}coolwg text|text2
├ ${prefix}realistic text|text2
├ ${prefix}space3d text|text2
├ ${prefix}gtiktok text|text2
├ ${prefix}stone text|text2
├ ${prefix}marvel text|text2
├ ${prefix}marvel2 text|text2
├ ${prefix}avengers text|text2
├ ${prefix}metalr text|text2
├ ${prefix}metalg text|text2
├ ${prefix}metalg2 text|text2
├ ${prefix}halloween2 text|text2
├ ${prefix}lion text|text2
├ ${prefix}wolf_bw text|text2
├ ${prefix}wolf_g text|text2
├ ${prefix}ninja text|text2
├ ${prefix}3dsteel text|text2
├ ${prefix}horror2 text|text2
├ ${prefix}lava text|text2
├ ${prefix}bagel text|text2
├ ${prefix}blackpink text
├ ${prefix}rainbow2 text
├ ${prefix}water_pipe text
├ ${prefix}halloween text
├ ${prefix}sketch text
├ ${prefix}sircuit text
├ ${prefix}discovery text
├ ${prefix}metallic2 text
├ ${prefix}fiction text
├ ${prefix}demon text
├ ${prefix}transformer text
├ ${prefix}berry text
├ ${prefix}thunder text
├ ${prefix}magma text
├ ${prefix}3dstone text
├ ${prefix}neon text
├ ${prefix}glitch text
├ ${prefix}harry_potter text
├ ${prefix}embossed text
├ ${prefix}broken text
├ ${prefix}papercut text
├ ${prefix}gradient text
├ ${prefix}glossy text
├ ${prefix}watercolor text
├ ${prefix}multicolor text
├ ${prefix}neon_devil text
├ ${prefix}underwater text
├ ${prefix}bear text
├ ${prefix}wonderfulg text
├ ${prefix}christmas text
├ ${prefix}neon_light text
├ ${prefix}snow text
├ ${prefix}cloudsky text
├ ${prefix}luxury2 text
├ ${prefix}gradient2 text
├ ${prefix}summer text
├ ${prefix}writing text
├ ${prefix}engraved text
├ ${prefix}summery text
├ ${prefix}3dglue text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}oscar text
├ ${prefix}minion text
├ ${prefix}holographic text
├ ${prefix}purple text
├ ${prefix}glossyb text
├ ${prefix}deluxe2 text
├ ${prefix}glossyc text
├ ${prefix}fabric text
├ ${prefix}neonc text
├ ${prefix}newyear text
├ ${prefix}newyear2 text
├ ${prefix}metals text
├ ${prefix}xmas text
├ ${prefix}blood text
├ ${prefix}darkg text
├ ${prefix}joker text
├ ${prefix}wicker text
├ ${prefix}natural text
├ ${prefix}firework text
├ ${prefix}skeleton text
├ ${prefix}balloon text
├ ${prefix}balloon2 text
├ ${prefix}balloon3 text
├ ${prefix}balloon4 text
├ ${prefix}balloon5 text
├ ${prefix}balloon6 text
├ ${prefix}balloon7 text
├ ${prefix}steel text
├ ${prefix}gloss text
├ ${prefix}denim text
├ ${prefix}decorate text
├ ${prefix}decorate2 text
├ ${prefix}peridot text
├ ${prefix}rock text
├ ${prefix}glass text
├ ${prefix}glass2 text
├ ${prefix}glass3 text
├ ${prefix}glass4 text
├ ${prefix}glass5 text
├ ${prefix}glass6 text
├ ${prefix}glass7 text
├ ${prefix}glass8 text
├ ${prefix}captain_as2 text
├ ${prefix}robot text
├ ${prefix}equalizer text
├ ${prefix}toxic text
├ ${prefix}sparkling text
├ ${prefix}sparkling2 text
├ ${prefix}sparkling3 text
├ ${prefix}sparkling4 text
├ ${prefix}sparkling5 text
├ ${prefix}sparkling6 text
├ ${prefix}sparkling7 text
├ ${prefix}decorative text
├ ${prefix}chocolate text
├ ${prefix}strawberry text
├ ${prefix}koifish text
├ ${prefix}bread text
├ ${prefix}matrix text
├ ${prefix}blood2 text
├ ${prefix}neonligth2 text
├ ${prefix}thunder2 text
├ ${prefix}3dbox text
├ ${prefix}neon2 text
├ ${prefix}roadw text
├ ${prefix}bokeh text
├ ${prefix}gneon text
├ ${prefix}advanced text
├ ${prefix}dropwater text
├ ${prefix}wall text
├ ${prefix}chrismast text
├ ${prefix}honey text
├ ${prefix}drug text
├ ${prefix}marble text
├ ${prefix}marble2 text
├ ${prefix}ice text
├ ${prefix}juice text
├ ${prefix}rusty text
├ ${prefix}abstra text
├ ${prefix}biscuit text
├ ${prefix}wood text
├ ${prefix}scifi text
├ ${prefix}metalr text
├ ${prefix}purpleg text
├ ${prefix}shiny text 
├ ${prefix}jewelry text
├ ${prefix}jewelry2 text
├ ${prefix}jewelry3 text
├ ${prefix}jewelry4 text
├ ${prefix}jewelry5 text
├ ${prefix}jewelry6 text
├ ${prefix}jewelry7 text
├ ${prefix}jewelry8 text
├ ${prefix}metalh text
├ ${prefix}golden text
├ ${prefix}glitter text
├ ${prefix}glitter2 text
├ ${prefix}glitter3 text
├ ${prefix}glitter4 text
├ ${prefix}glitter5 text
├ ${prefix}glitter6 text
├ ${prefix}glitter7 text
├ ${prefix}metale text
├ ${prefix}carbon text
├ ${prefix}candy text
├ ${prefix}metalb text
├ ${prefix}gemb text
├ ${prefix}3dchrome text
├ ${prefix}metalb2 text
├ ${prefix}metalg text
╰❒ ${prefix}metalg text


╭─❒ 「 Outros 」
├ ${prefix}afk [razao]
├ ${prefix}translate lingua texto
├ ${prefix}kalkulator [numeros]
├ ${prefix}smeme [text]
├ ${prefix}smeme2 [text|text]
├ ${prefix}memegen [text|text]
╰❒

╭─❒ 「 TqTo 」 
├ Workx
╰❒ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*── 「 REGRAS E PERGUNTAS FREQUENTES」 ──*

1. Não envie spam para mim. ️
(Spam significa enviar muitas mensagens sem sentido para mim)

Sanções: *❎ AVISO / SOFT BLOCK*

2. Não ligue para mim. ️
Sanções: *❎ BLOQUEIO SUAVE*

3. Não me explore.😖
Para ter acesso a mim nos seus Grupos Pague ou doe para apoiar a causa
Sanções: *BLOQUEIO PERMANENTE*

🗯️ O bot não está ou está lento para responder?
➡️ Pode ser afetado por rede, sinal, banido pelo Whatsapp e algum motivo. Continue obedecendo as regras‼️

🗯️ Como Posso comprar um bot?
➡️ Para adquirir um Bot fale com administrador e tenha acesso a eles.

🗯️ Posso adicionar ao grupo?
➡️ Por um tempo, o bot fica livre para adicionar status.

🗯️ Qual é o prefixo??
➡️ Este bot usa vários prefixos. Isso significa que você pode usar o prefixo #,. e outros prefixos razoáveis.



Se você entende as regras, digite *${prefix}allmenu* para aceder ao menu!

⚠️ Todas as políticas e disposições do Cosmos são mantidas pelo proprietário e todas as mudanças de política, a qualquer momento o proprietário tem o direito de revogar, bloquear usuários (* ﹏ *)

Muito obrigado! Para vocês, usuários amigáveis ​​e algumas pessoas que também ajudaram no projeto de confecção do Cosmos
😖🙏
`
}
exports.welcome = () =>{
	return`Seja Bem Vindo e Aproveite o Compaheirismo do Grupo 🤗
	
╭ Nome :
├ Idade :
├ Genero :
├ Cidade :
╰❒ 𝖯ergunte antes as regras do Grupo e leia a descrição ~`
}
exports.sair = () =>{
	return`Parece que vc n gosta de ser Social 😣 Adeus >.<
    Mtish`
}
exports.source = () =>{
return`*── 「 Codigo Fonte 」 ──*

DE MOMENTO O CODIGO FONTE PODE SER ADQUIRIDO APENAS COMPRANDO COM O ADMINISTRADOR WA.ME/258848858288
`
}
exports.tos = (ownernomer) => {
    return `
    *── 「 DOAR 」 ──*

    OI ☺️ 
    Você pode me ajudar a manter este bot atualizado doando
    
    Qualquer quantia da sua doação significará muito 👍
    
    Thanks!
    
    Para Doar Contacte o Admin:
    wa.me/${ownernomer} (Proprietario)

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}sc
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}botstatus
╰❒ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}setmenu [query]
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}sendsesi
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}broadcast [text]
├ ${prefix}bc [text]
├ ${prefix}bcgc [text]
├ ${prefix}nsfw [on/off]
├ ${prefix}antiviewonce [on/off]
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
├ ${prefix}setcmd [reply stiker]
├ ${prefix}delcmd [reply stiker]
├ ${prefix}listcmd
├ ${prefix}absen
├ ${prefix}cekabsen
├ ${prefix}deleteabsen
├ ${prefix}absenstart
├ ${prefix}addmsg [nama file]
├ ${prefix}getmsg [nama file]
├ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
├ ${prefix}listonline
├ ${prefix}sider
├ ${prefix}infochat
├ ${prefix}setdesk [text]
├ ${prefix}setppgrup [reply image]
├ ${prefix}antilink [on/off]
├ ${prefix}revogar
├ ${prefix}sair
├ ${prefix}add [258***]
├ ${prefix}remover @tag
├ ${prefix}sair
├ ${prefix}linkgc
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
├ ${prefix}stickertag
├ ${prefix}videotag [query]
├ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
├ ${prefix}igstalk [username]
├ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Pesquisa 」 
├ ${prefix}ytsearch [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
╰❒ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Conversores 」 
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Efeito de Imagem 」 
├ ${prefix}wanted [resposta imagem/adesivo]
├ ${prefix}utatoo [resposta imagem/adesivo]
├ ${prefix}unsharpen [resposta imagem/adesivo]
├ ${prefix}thanos [resposta imagem/adesivo]
├ ${prefix}sniper [resposta imagem/adesivo]
├ ${prefix}sharpen [resposta imagem/adesivo]
├ ${prefix}sepia [resposta imagem/adesivo]
├ ${prefix}scary [resposta imagem/adesivo]
├ ${prefix}rip [resposta imagem/adesivo]
├ ${prefix}redple [resposta imagem/adesivo]
├ ${prefix}rejected [resposta imagem/adesivo]
├ ${prefix}posterize [resposta imagem/adesivo]
├ ${prefix}ps4 [resposta imagem/adesivo]
├ ${prefix}pixelize [resposta imagem/adesivo]
├ ${prefix}missionpassed [resposta imagem/adesivo]
├ ${prefix}moustache [resposta imagem/adesivo]
├ ${prefix}lookwhatkarenhave [resposta imagem/adesivo]
├ ${prefix}jail [resposta imagem/adesivo]
├ ${prefix}invert [resposta imagem/adesivo]
├ ${prefix}instagram [resposta imagem/adesivo]
├ ${prefix}greyscale [resposta imagem/adesivo]
├ ${prefix}glitch [resposta imagem/adesivo]
├ ${prefix}frame [resposta imagem/adesivo]
├ ${prefix}fire [resposta imagem/adesivo]
├ ${prefix}distort [resposta imagem/adesivo]
├ ${prefix}dictator [resposta imagem/adesivo]
├ ${prefix}deepfry [resposta imagem/adesivo]
├ ${prefix}ddungeon [resposta imagem/adesivo]
├ ${prefix}circle [resposta imagem/adesivo]
├ ${prefix}challenger [resposta imagem/adesivo]
├ ${prefix}burn [resposta imagem/adesivo]
╰❒ ${prefix}beautiful [resposta imagem/adesivo]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
├ ${prefix}jail [resposta imagem/adesivo]
├ ${prefix}red [resposta imagem/adesivo]
├ ${prefix}bloo [resposta imagem/adesivo]
├ ${prefix}blue [resposta imagem/adesivo]
├ ${prefix}sepia [resposta imagem/adesivo]
├ ${prefix}green [resposta imagem/adesivo]
├ ${prefix}glass [resposta imagem/adesivo]
├ ${prefix}invert [resposta imagem/adesivo]
├ ${prefix}blurple [resposta imagem/adesivo]
├ ${prefix}blurple2 [resposta imagem/adesivo]
├ ${prefix}wasted [resposta imagem/adesivo]
├ ${prefix}passed [resposta imagem/adesivo]
├ ${prefix}triggered [resposta imagem/adesivo]
├ ${prefix}comrade [resposta imagem/adesivo]
├ ${prefix}greyscale [resposta imagem/adesivo]
├ ${prefix}threshold [resposta imagem/adesivo]
├ ${prefix}brightness [resposta imagem/adesivo]
╰❒ ${prefix}invertgreyscale [resposta imagem/adesivo]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Downloaders 」 
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytshortmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}ytshorts [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
├ ${prefix}soundcloud [link]
├ ${prefix}gitclone [link repo]
├ ${prefix}mediafire [link]
╰❒ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 INDISPONIVEL 」
├ ${prefix}OHH
╰❒ ${prefix}INDISPONIVEL
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 INDISPONIVEL 」
├ ${prefix}INDISPONIVEL
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2 text|text2
├ ${prefix}horror text|text2
├ ${prefix}game8bit text|text2
├ ${prefix}layered text|text2
├ ${prefix}glitch2 text|text2
├ ${prefix}coolg text|text2
├ ${prefix}coolwg text|text2
├ ${prefix}realistic text|text2
├ ${prefix}space3d text|text2
├ ${prefix}gtiktok text|text2
├ ${prefix}stone text|text2
├ ${prefix}marvel text|text2
├ ${prefix}marvel2 text|text2
├ ${prefix}avengers text|text2
├ ${prefix}metalr text|text2
├ ${prefix}metalg text|text2
├ ${prefix}metalg2 text|text2
├ ${prefix}halloween2 text|text2
├ ${prefix}lion text|text2
├ ${prefix}wolf_bw text|text2
├ ${prefix}wolf_g text|text2
├ ${prefix}ninja text|text2
├ ${prefix}3dsteel text|text2
├ ${prefix}horror2 text|text2
├ ${prefix}lava text|text2
├ ${prefix}bagel text|text2
├ ${prefix}blackpink text
├ ${prefix}rainbow2 text
├ ${prefix}water_pipe text
├ ${prefix}halloween text
├ ${prefix}sketch text
├ ${prefix}sircuit text
├ ${prefix}discovery text
├ ${prefix}metallic2 text
├ ${prefix}fiction text
├ ${prefix}demon text
├ ${prefix}transformer text
├ ${prefix}berry text
├ ${prefix}thunder text
├ ${prefix}magma text
├ ${prefix}3dstone text
├ ${prefix}neon text
├ ${prefix}glitch text
├ ${prefix}harry_potter text
├ ${prefix}embossed text
├ ${prefix}broken text
├ ${prefix}papercut text
├ ${prefix}gradient text
├ ${prefix}glossy text
├ ${prefix}watercolor text
├ ${prefix}multicolor text
├ ${prefix}neon_devil text
├ ${prefix}underwater text
├ ${prefix}bear text
├ ${prefix}wonderfulg text
├ ${prefix}christmas text
├ ${prefix}neon_light text
├ ${prefix}snow text
├ ${prefix}cloudsky text
├ ${prefix}luxury2 text
├ ${prefix}gradient2 text
├ ${prefix}summer text
├ ${prefix}writing text
├ ${prefix}engraved text
├ ${prefix}summery text
├ ${prefix}3dglue text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}oscar text
├ ${prefix}minion text
├ ${prefix}holographic text
├ ${prefix}purple text
├ ${prefix}glossyb text
├ ${prefix}deluxe2 text
├ ${prefix}glossyc text
├ ${prefix}fabric text
├ ${prefix}neonc text
├ ${prefix}newyear text
├ ${prefix}newyear2 text
├ ${prefix}metals text
├ ${prefix}xmas text
├ ${prefix}blood text
├ ${prefix}darkg text
├ ${prefix}joker text
├ ${prefix}wicker text
├ ${prefix}natural text
├ ${prefix}firework text
├ ${prefix}skeleton text
├ ${prefix}balloon text
├ ${prefix}balloon2 text
├ ${prefix}balloon3 text
├ ${prefix}balloon4 text
├ ${prefix}balloon5 text
├ ${prefix}balloon6 text
├ ${prefix}balloon7 text
├ ${prefix}steel text
├ ${prefix}gloss text
├ ${prefix}denim text
├ ${prefix}decorate text
├ ${prefix}decorate2 text
├ ${prefix}peridot text
├ ${prefix}rock text
├ ${prefix}glass text
├ ${prefix}glass2 text
├ ${prefix}glass3 text
├ ${prefix}glass4 text
├ ${prefix}glass5 text
├ ${prefix}glass6 text
├ ${prefix}glass7 text
├ ${prefix}glass8 text
├ ${prefix}captain_as2 text
├ ${prefix}robot text
├ ${prefix}equalizer text
├ ${prefix}toxic text
├ ${prefix}sparkling text
├ ${prefix}sparkling2 text
├ ${prefix}sparkling3 text
├ ${prefix}sparkling4 text
├ ${prefix}sparkling5 text
├ ${prefix}sparkling6 text
├ ${prefix}sparkling7 text
├ ${prefix}decorative text
├ ${prefix}chocolate text
├ ${prefix}strawberry text
├ ${prefix}koifish text
├ ${prefix}bread text
├ ${prefix}matrix text
├ ${prefix}blood2 text
├ ${prefix}neonligth2 text
├ ${prefix}thunder2 text
├ ${prefix}3dbox text
├ ${prefix}neon2 text
├ ${prefix}roadw text
├ ${prefix}bokeh text
├ ${prefix}gneon text
├ ${prefix}advanced text
├ ${prefix}dropwater text
├ ${prefix}wall text
├ ${prefix}chrismast text
├ ${prefix}honey text
├ ${prefix}drug text
├ ${prefix}marble text
├ ${prefix}marble2 text
├ ${prefix}ice text
├ ${prefix}juice text
├ ${prefix}rusty text
├ ${prefix}abstra text
├ ${prefix}biscuit text
├ ${prefix}wood text
├ ${prefix}scifi text
├ ${prefix}metalr text
├ ${prefix}purpleg text
├ ${prefix}shiny text 
├ ${prefix}jewelry text
├ ${prefix}jewelry2 text
├ ${prefix}jewelry3 text
├ ${prefix}jewelry4 text
├ ${prefix}jewelry5 text
├ ${prefix}jewelry6 text
├ ${prefix}jewelry7 text
├ ${prefix}jewelry8 text
├ ${prefix}metalh text
├ ${prefix}golden text
├ ${prefix}glitter text
├ ${prefix}glitter2 text
├ ${prefix}glitter3 text
├ ${prefix}glitter4 text
├ ${prefix}glitter5 text
├ ${prefix}glitter6 text
├ ${prefix}glitter7 text
├ ${prefix}metale text
├ ${prefix}carbon text
├ ${prefix}candy text
├ ${prefix}metalb text
├ ${prefix}gemb text
├ ${prefix}3dchrome text
├ ${prefix}metalb2 text
├ ${prefix}metalg text
╰❒ ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
├ ${prefix}ttp [text]
├ ${prefix}attp [text]
├ ${prefix}afk [reason]
├ ${prefix}translate kode_bahasa text
├ ${prefix}kalkulator [query]
├ ${prefix}smeme [text]
├ ${prefix}smeme2 [text|text]
╰❒ ${prefix}memegen [text|text]
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
├ WORKX
╰❒ And All Support
`
}