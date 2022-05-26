exports.private = () =>{
	return`Este recurso só pode ser usado em bate-papo privado`
	}
exports.wait = () => {
    return `⏳ Aguarde Um Instante Por Favor~`
}
exports.ok = () => {
    return `✅ Concluido com Sucesso~`
}

exports.err = () => {
    return `⚠️ Erro ao Carregar recursos`
}
exports.erorLink = () => {
    return `⚠️ Link Incorreto ou Parece haver um Erro`
}
exports.media = () => {
    return `Selecione a mídia que deseja baixar`
}
exports.replyImg = (prefix, command) => {
    return `Envie/responda a foto com legenda ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Formato incorreto ❎ Por favor, verifique como usar em *${prefix}ajuda*..`
}

exports.emptyMess = () => {
    return `❎ Digite a mensagem que deseja transmitir!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎Comando *${cmd}* não registrado em*${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎  Este comando é para o Chefe`
}

exports.doneOwner = () => {
    return `✅  ️Está feito, Chefe  ~`
}

exports.groupOnly = () => {
    return `👥  Este comando só pode ser usado em grupos!!!`
}

exports.adminOnly = () => {
    return `🙅   Este comando só pode ser usado por administradores de grupo!`
}

exports.nhFalse = () => {
    return `Código inválido!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 SALÃO DA VERGONHA 」 ──*
    
Totalmente bloqueado: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎O usuário não é um administrador!! ❎`
}

exports.adminAlready = () => {
    return `❎ Não foi possível promover um usuário que é administrador!`
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
exports.menunya = (salam, pushname, botname) =>{
	return`Hello ${pushname} 👋,  prazer em ve-lo 
Chamo-me ${botname}, um bot é um Beta Multi-Device Whatsapp.
Se você encontrar algum tipo de bug ou erro, por favor, entenda.
envie o  bug para o dono para que seja corrigido imediatamente 🙏      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Oi ${pushname}*
*⌚Horas : ${time}*
*📚 Menu Cosmos :*

╭─❒ 「 Info do Cosmos 」 
├ ${prefix}dono
├ ${prefix}regras
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}botstatus
╰❒ ${prefix}apoiar

─❒ 「 ADMINISTRADOR 」 
├ ${prefix}block [contacto]
├ ${prefix}unblock[contacto]
├ ${prefix}setmenu [query]
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}setmenu katalog
├ ${prefix}setmenu katalog2
├ ${prefix}setmenu list
├ ${prefix}setwm packname|author
├ ${prefix}sendsesi
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}broadcast [texto]
├ ${prefix}bc [texto]
├ ${prefix}bcgc [texto]
├ ${prefix}autorespond [on/off]
├ ${prefix}antiviewonce [on/off]
├ ${prefix}entrar [link]
├ ${prefix}self
├ ${prefix}public [Somente bot]
├ ${prefix}del [apaga msg do bot]
╰❒ ${prefix}setppbot [marque img image]


╭─❒ 「 Banco de Dados 」 
├ ${prefix}setcmd [responda stiker]
├ ${prefix}delcmd [responda stiker]
├ ${prefix}listcmd
├ ${prefix}absen
├ ${prefix}cekabsen
├ ${prefix}deleteabsen
├ ${prefix}absenstart
├ ${prefix}addmsg [nome do ficheiro]
├ ${prefix}getmsg [nome do ficheiro]
├ ${prefix}listmsg
╰❒ ${prefix}delmsg [nome do ficheiro]


╭─❒ 「 Grupos 」 
├ ${prefix}listonline
├ ${prefix}sider
├ ${prefix}wm packname|author
├ ${prefix}infochat
├ ${prefix}setdesk [text]
├ ${prefix}setppgrup [responda imagem]
├ ${prefix}antilink [on/off]
├ ${prefix}revogar
├ ${prefix}sair
├ ${prefix}add [258***]
├ ${prefix}remover @tag
├ ${prefix}sair
├ ${prefix}linkgc
├ ${prefix}take packname|author
├ ${prefix}grupo [abrir/fechar]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Tag 」 
├ ${prefix}stickertag
├ ${prefix}videotag [query]         
├ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]

╭─❒ 「 HACKER 」 
├ ${prefix}igstalk [username]
├ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [canal]


╭─❒ 「 Pesquisa 」 
├ ${prefix}ytsearch [query]
├ ${prefix}wallpaper [query]
├ ${prefix}playstore [query]
├ ${prefix}apkmody [query]
├ ${prefix}revdl [query]
├ ${prefix}apkgoogle [query]
├ ${prefix}apkdone [query] 
├ ${prefix}apkshub [query] 
├ ${prefix}hostapk [query]    
├ ${prefix}toraccino [query] 
├ ${prefix}uapkpro [query]   
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」
├ ${prefix}toaudio [video]
├ ${prefix}tomp3 [video]
├ ${prefix}tovn [video]
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video/stiker]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]

╭─❒ 「 Image Effect 」 
├ ${prefix}wanted [reply image/stiker]
├ ${prefix}utatoo [reply image/stiker]
├ ${prefix}unsharpen [reply image/stiker]
├ ${prefix}thanos [reply image/stiker]
├ ${prefix}sniper [reply image/stiker]
├ ${prefix}sharpen [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}scary [reply image/stiker]
├ ${prefix}rip [reply image/stiker]
├ ${prefix}redple [reply image/stiker]
├ ${prefix}rejected [reply image/stiker]
├ ${prefix}posterize [reply image/stiker]
├ ${prefix}ps4 [reply image/stiker]
├ ${prefix}pixelize [reply image/stiker]
├ ${prefix}missionpassed [reply image/stiker]
├ ${prefix}moustache [reply image/stiker]
├ ${prefix}lookwhatkarenhave [reply image/stiker]
├ ${prefix}jail [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}instagram [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}glitch [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}frame [reply image/stiker]
├ ${prefix}fire [reply image/stiker]
├ ${prefix}distort [reply image/stiker]
├ ${prefix}dictator [reply image/stiker]
├ ${prefix}deepfry [reply image/stiker]
├ ${prefix}ddungeon [reply image/stiker]
├ ${prefix}circle [reply image/stiker]
├ ${prefix}challenger [reply image/stiker]
├ ${prefix}burn [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]


╭─❒ 「 Sticker Effect 」 
├ ${prefix}jail [reply image/stiker]
├ ${prefix}red [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}bloo [reply image/stiker]
├ ${prefix}blue [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}green [reply image/stiker]
├ ${prefix}glass [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}blurple [reply image/stiker]
├ ${prefix}blurple2 [reply image/stiker]
├ ${prefix}wasted [reply image/stiker]
├ ${prefix}passed [reply image/stiker]
├ ${prefix}triggered [reply image/stiker]
├ ${prefix}comrade [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}threshold [reply image/stiker]
├ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]


╭─❒ 「 Download 」 
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
├ ${prefix}gitrepo [username repo branch]
├ ${prefix}mediafire [link]
╰❒ ${prefix}twitter link

╭─❒ 「 Ephoto360 Menu 」
├ ${prefix}youtubegold
├ ${prefix}youtubesilver
├ ${prefix}facebookgold
├ ${prefix}facebooksilver
├ ${prefix}instagramgold
├ ${prefix}instagramsilver
├ ${prefix}twittergold
├ ${prefix}twittersilver
├ ${prefix}retrotext
├ ${prefix}halloweenbats
├ ${prefix}texthalloween
├ ${prefix}cardhalloween
├ ${prefix}birthdaycake
├ ${prefix}thundertext
├ ${prefix}icetext
├ ${prefix}milkcake
├ ${prefix}snowontext
├ ${prefix}metalstar
├ ${prefix}dragonfire
├ ${prefix}zombie3d
├ ${prefix}merrycard
├ ${prefix}generalexam 
├ ${prefix}viettel
├ ${prefix}embroider
├ ${prefix}graffititext
├ ${prefix}graffititext2
├ ${prefix}graffititext3
├ ${prefix}covergraffiti
├ ${prefix}moderngold
├ ${prefix}capercut
├ ${prefix}lovecard
├ ${prefix}heartflashlight
├ ${prefix}heartcup
├ ${prefix}sunglightshadow
├ ${prefix}graffiti3d
├ ${prefix}moderngoldsilver
├ ${prefix}moderngold2
├ ${prefix}moderngold3
├ ${prefix}fabrictext
├ ${prefix}masteryavatar
├ ${prefix}messagecoffee
├ ${prefix}announofwin
├ ${prefix}writeblood
├ ${prefix}horrorletter
├ ${prefix}writehorror
├ ${prefix}shirtclub
├ ${prefix}angelwing
├ ${prefix}christmasseason
├ ${prefix}projectyasuo
├ ${prefix}lovelycute
├ ${prefix}womansday
├ ${prefix}covergamepubg
├ ${prefix}nameonheart
├ ${prefix}funnyhalloween
├ ${prefix}lightningpubg
├ ${prefix}greetingcardvideo 
├ ${prefix}christmascard 
├ ${prefix}galaxybat
├ ${prefix}writegalaxy
├ ${prefix}starsnight
├ ${prefix}noeltext
├ ${prefix}textcakes
├ ${prefix}pubgbirthday
├ ${prefix}galaxywallpaper
├ ${prefix}pubgglicthvideo 
├ ${prefix}pubgmascotlogo
├ ${prefix}realembroidery
├ ${prefix}vintagetelevision
├ ${prefix}funnyanimations
├ ${prefix}glowingtext
├ ${prefix}textonglass
├ ${prefix}cartoonstyle
├ ${prefix}multicolor
├ ${prefix}watercolor2
├ ${prefix}textsky
├ ${prefix}summerbeach
├ ${prefix}1917text
├ ${prefix}puppycute
╰❒ ${prefix}rosebirthday


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


╭─❒ 「 Extras 」
├ ${prefix}afk [razao]
├ ${prefix}translate lingua_texto a traduzir
├ ${prefix}kalkulator [soma, divisao ou subtracao]
├ ${prefix}smeme [texto]
├ ${prefix}smeme2 [texto|texto]
├ ${prefix}memegen [texto|texto]
├ ${prefix}verdade 
├ ${prefix}desafio
╰❒
╭─❒ 「 TqTo 」 
├ My God
├ My Parents
├ Fatih A.
├ Ferdi
├ DikaArdnt
├ Mhankbarbar
├ Nurutomo
├ Rashid
├ ZeeoneOfc
├ Penyedia Module
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
	return`Seja Bem Vindo e Aproveite o Compaheirismo do Grupo  🤗
	
    ╭ Nome :
    ├ Idade :
    ├ Genero :
    ├ Cidade :
    ╰❒ 𝖯ergunte antes as regras do Grupo e leia a descrição ~`
}
exports.leave = () =>{
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
	return`╭─❒ 「 Info do Cosmos 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}sc
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}botstatus
╰❒ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 ADMIN 」 
├ ${prefix}setmenu [query]
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}setmenu katalog
├ ${prefix}setmenu katalog2
├ ${prefix}setmenu list
├ ${prefix}setwm packname|author
├ ${prefix}sendsesi
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}broadcast [text]
├ ${prefix}bc [text]
├ ${prefix}bcgc [text]
├ ${prefix}nsfw [on/off]
├ ${prefix}autorespond [on/off]
├ ${prefix}antiviewonce [on/off]
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Banco de Dados 」 
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
	return`╭─❒ 「 Grupos 」 
├ ${prefix}listonline
├ ${prefix}sider
├ ${prefix}wm packname|author
├ ${prefix}infochat
├ ${prefix}setdesk [text]
├ ${prefix}setppgrup [reply image]
├ ${prefix}antilink [on/off]
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}take packname|author
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
├ ${prefix}playstore [query]
├ ${prefix}apkmody [query]
├ ${prefix}revdl [query]
├ ${prefix}apkgoogle [query]
├ ${prefix}apkdone [query] 
├ ${prefix}apkshub [query] 
├ ${prefix}hostapk [query]    
├ ${prefix}toraccino [query] 
├ ${prefix}uapkpro [query]   
╰❒ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
├ ${prefix}toaudio [video]
├ ${prefix}tomp3 [video]
├ ${prefix}tovn [video]
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
├ ${prefix}wanted [reply image/stiker]
├ ${prefix}utatoo [reply image/stiker]
├ ${prefix}unsharpen [reply image/stiker]
├ ${prefix}thanos [reply image/stiker]
├ ${prefix}sniper [reply image/stiker]
├ ${prefix}sharpen [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}scary [reply image/stiker]
├ ${prefix}rip [reply image/stiker]
├ ${prefix}redple [reply image/stiker]
├ ${prefix}rejected [reply image/stiker]
├ ${prefix}posterize [reply image/stiker]
├ ${prefix}ps4 [reply image/stiker]
├ ${prefix}pixelize [reply image/stiker]
├ ${prefix}missionpassed [reply image/stiker]
├ ${prefix}moustache [reply image/stiker]
├ ${prefix}lookwhatkarenhave [reply image/stiker]
├ ${prefix}jail [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}instagram [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}glitch [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}frame [reply image/stiker]
├ ${prefix}fire [reply image/stiker]
├ ${prefix}distort [reply image/stiker]
├ ${prefix}dictator [reply image/stiker]
├ ${prefix}deepfry [reply image/stiker]
├ ${prefix}ddungeon [reply image/stiker]
├ ${prefix}circle [reply image/stiker]
├ ${prefix}challenger [reply image/stiker]
├ ${prefix}burn [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
├ ${prefix}jail [reply image/stiker]
├ ${prefix}red [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}bloo [reply image/stiker]
├ ${prefix}blue [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}green [reply image/stiker]
├ ${prefix}glass [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}blurple [reply image/stiker]
├ ${prefix}blurple2 [reply image/stiker]
├ ${prefix}wasted [reply image/stiker]
├ ${prefix}passed [reply image/stiker]
├ ${prefix}triggered [reply image/stiker]
├ ${prefix}comrade [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}threshold [reply image/stiker]
├ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
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
├ ${prefix}gitrepo [username repo branch]
├ ${prefix}mediafire [link]
╰❒ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Rs 」
├ ${prefix}indisponivel

`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Indisponivel 」
    ├ ${prefix}indisponivel
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
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
├ ${prefix}kuismath
├ ${prefix}tebak [option]
├ ${prefix}tekateki
├ ${prefix}susunkata
╰❒ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Indisponivel 」
├ ${prefix}indisponivel
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Indisponivel 」
├ ${prefix}indisponivel
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
Workx
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Indi 」
    ├ ${prefix}indisponivel
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
    ├ ${prefix}indisponivel
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
├ ${prefix}youtubegold text
├ ${prefix}youtubesilver text
├ ${prefix}facebookgold text
├ ${prefix}facebooksilver text
├ ${prefix}instagramgold text
├ ${prefix}instagramsilver text
├ ${prefix}twittergold text
├ ${prefix}twittersilver text
├ ${prefix}retrotext text
├ ${prefix}halloweenbats text
├ ${prefix}texthalloween text
├ ${prefix}cardhalloween text
├ ${prefix}birthdaycake text
├ ${prefix}thundertext text
├ ${prefix}icetext text
├ ${prefix}milkcake text
├ ${prefix}snowontext text
├ ${prefix}metalstar text
├ ${prefix}dragonfire text
├ ${prefix}zombie3d text
├ ${prefix}merrycard text
├ ${prefix}generalexam text 
├ ${prefix}viettel text
├ ${prefix}embroider text
├ ${prefix}graffititext text
├ ${prefix}graffititext2 text
├ ${prefix}graffititext3 text
├ ${prefix}covergraffiti text
├ ${prefix}moderngold text
├ ${prefix}capercut text
├ ${prefix}lovecard text
├ ${prefix}heartflashlight text
├ ${prefix}heartcup text
├ ${prefix}sunglightshadow text
├ ${prefix}graffiti3d text
├ ${prefix}moderngoldsilver text
├ ${prefix}moderngold2 text
├ ${prefix}moderngold3 text
├ ${prefix}fabrictext text
├ ${prefix}masteryavatar text
├ ${prefix}messagecoffee text
├ ${prefix}announofwin text
├ ${prefix}writeblood text
├ ${prefix}horrorletter text
├ ${prefix}writehorror text
├ ${prefix}shirtclub text
├ ${prefix}angelwing text
├ ${prefix}christmasseason text
├ ${prefix}projectyasuo text
├ ${prefix}lovelycute text
├ ${prefix}womansday text
├ ${prefix}covergamepubg text
├ ${prefix}nameonheart text
├ ${prefix}funnyhalloween text
├ ${prefix}lightningpubg text
├ ${prefix}greetingcardvideo text 
├ ${prefix}christmascard text 
├ ${prefix}galaxybat text
├ ${prefix}writegalaxy text
├ ${prefix}starsnight text
├ ${prefix}noeltext text
├ ${prefix}textcakes text
├ ${prefix}pubgbirthday text
├ ${prefix}galaxywallpaper text
├ ${prefix}pubgglicthvideo text 
├ ${prefix}pubgmascotlogo text
├ ${prefix}realembroidery text
├ ${prefix}vintagetelevision text
├ ${prefix}funnyanimations text
├ ${prefix}glowingtext text
├ ${prefix}textonglass text
├ ${prefix}cartoonstyle text
├ ${prefix}multicolor text
├ ${prefix}watercolor2 text
├ ${prefix}textsky text
├ ${prefix}summerbeach text
├ ${prefix}1917text text
├ ${prefix}puppycute text
├ ${prefix}rosebirthday text
├ ${prefix}steellettering text|text2
├ ${prefix}letterstext text|text2
├ ${prefix}barcashirt text|text2
├ ${prefix}premiercup text|text2
├ ${prefix}stylepoligon text|text2
├ ${prefix}lifebuoys text|text2
╰❒ ${prefix}juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 Logo Menu 」
├ ${prefix}coverbannerlol text|heroes
├ ${prefix}pubglogomaker text|style
├ ${prefix}colorfulpubg text|color
├ ${prefix}astronotspace text|style
├ ${prefix}wallpaperaov text|heroes
├ ${prefix}maketeamlogo text|style
├ ${prefix}circlemarcotteam text|logo
├ ${prefix}wallpaperml text|heroes
├ ${prefix}dragonballfb text|character
├ ${prefix}bannerofaov text|character
├ ${prefix}effect3donbeach text|background
├ ${prefix}cutegirlgamer text|logo
├ ${prefix}footballteam text|logo
├ ${prefix}beautifulshimmering text|champion
├ ${prefix}pubgcutelogo text|logo
├ ${prefix}elegantrotation text|logo
├ ${prefix}logogamingassasin text|logo
├ ${prefix}introvideomaker text|logo
├ ${prefix}gaminglogo4fvs text|logo
├ ${prefix}blueneon text|logo
├ ${prefix}metalmascot text|logo
├ ${prefix}anonymous text|style
├ ${prefix}lolpentakill text|style
├ ${prefix}avatarleagueofking text|style
├ ${prefix}avatarff text|character
├ ${prefix}overwatchwallpaper text|character
├ ${prefix}rovwallpaperhd text|hero
├ ${prefix}rovwallpaper text|avatar
├ ${prefix}beautifulgalaxylol text|style
├ ${prefix}crossfirecover text|character
├ ${prefix}lolwallpaper text|wallpaper
├ ${prefix}coverdota2 text|heroes
├ ${prefix}coverleagueofking text|character
├ ${prefix}avatar3q360 text|avatar
├ ${prefix}coverofwarface text|character
├ ${prefix}newlolavatar text|avatar
├ ${prefix}csgocover text|background
├ ${prefix}coverloknew text|hero
├ ${prefix}coverfblol text|letters
├ ${prefix}overwatchcover text|hero
├ ${prefix}crossfirestyle text|avatar
├ ${prefix}avatarlolbyname text|style
├ ${prefix}lolcoverbyname text|avatar
├ ${prefix}cyberhunterfb text|character
├ ${prefix}coverfreefirefb text|character
├ ${prefix}gamingmascot text|style
├ ${prefix}coveronepiecefb text|character
├ ${prefix}bannerytcsgo text|banner
├ ${prefix}fbgamepubgcover text|template
├ ${prefix}banneroflol text|text2|banner
├ ${prefix}bannerofaov2 text|text2|banner
├ ${prefix}teamlogo text|text2|background
├ ${prefix}companylogo2 text|text2|background
├ ${prefix}companylogo text|text2|background
├ ${prefix}gradientlogo text|text2|background
├ ${prefix}pencilsketch text|text2|icon
├ ${prefix}gunlogogaming text|text2|background
├ ${prefix}banneroffreefire text|text2|background
├ ${prefix}letterlogos text|text2|thumb
├ ${prefix}bannerofoverwatch text|text2|background
├ ${prefix}bannerofapex text|text2|background
├ ${prefix}bannerofpubg text|text2|background
├ ${prefix}mascotstyle text|text2|thumb
├ ${prefix}logoaccording text|text2|thumb
╰❒ ${prefix}avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 Indisponivel 」
    ├ ${prefix}indisponivel
`
}

exports.soundmenu = (prefix) =>{
return`╭─❒ 「 Sound Menu 」
├ ${prefix}indisponivel
`
}
