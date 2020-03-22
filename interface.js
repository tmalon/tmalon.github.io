init()
animate()

window.onresize = function(event) {
    gs = window.innerWidth/1920
}

function new_image(path) {
	img = new Image()
	img.src = path
	return img
}

function getMousePos(c, event) {
    var rect = c.getBoundingClientRect()
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

function init() {

    // Global scaling
    gs = 1
    gs = window.innerWidth/1920

    document.addEventListener('contextmenu', event => event.preventDefault());

    c = document.getElementById("canvas")
    ctx = c.getContext("2d")
    ctx.textAlign = "left"

    xyMouse = {"x": 0, "y": 0}
    xyMouseUp = {"x": 0, "y": 0}
    xyClick = {"x": -1, "y": -1}

    c.addEventListener('mousemove', function(event) {
        event.preventDefault()
        xyMouse = getMousePos(c, event)
    }, false)

    c.addEventListener('mouseup', function(event) {
        event.preventDefault()
        xyMouseUp = getMousePos(c, event)
    }, false)


    c.addEventListener('mousedown', function(event) {
        event.preventDefault()
        xyClick = getMousePos(c, event)
    }, false)

    graphe = {"x": 80, "y": 250, "h": 80, "w": 730}
    camembert = {"x": 1710, "y": 800, "r": 110}

    frame = 0
    frames = [0, 208, 0, 0, 0, 0, 0]

    offset_x = 30
    offset_y = 360

    ligne = 0

    offset_x_prov = 920
    offset_y_prov = 370

    w_map = 600
    h_map = 600

    scale = 0.75
    scale_prov = 1

    dest_dpt = -1
    orig_dpt = -1

    mapping_pays = {"100": 6, "101": 1, "102": 4, "103": 3, "104": 10, "105": 7, "106": 5, "107": 9, "108": 2, "109": 8}

    colors_pays = {"100": "#00aaaa", "101": "#aa5555", "102": "#00aa55", "103": "#2244ee", "104": "#aa00ee", "105": "#bb5500", "106": "#abcced", "107": "#036733", "108": "#fec34d", "109": "#aa8844"}
    colors_pays_ordered = [colors_pays["100"], colors_pays["101"], colors_pays["102"], colors_pays["103"], colors_pays["104"], colors_pays["105"], colors_pays["106"], colors_pays["107"], colors_pays["108"], colors_pays["109"]]

    img_occitanie = new_image("./occitanie.png")

    img_fr = new_image("./flag_FR.png")
    img_de = new_image("./flag_DE.png")
    img_it = new_image("./flag_IT.png")
    img_espt = new_image("./flag_ESPT.png")
    img_us = new_image("./flag_US.png")
    img_ch = new_image("./flag_CH.png")
    img_nl = new_image("./flag_NL.png")
    img_dkseno = new_image("./flag_DKSENO.png")
    img_belu = new_image("./flag_BELU.png")
    img_gb = new_image("./flag_GB.png")

    img_d09 = new_image("./d09.png")
    img_d11 = new_image("./d11.png")
    img_d12 = new_image("./d12.png")
    img_d30 = new_image("./d30.png")
    img_d31 = new_image("./d31.png")
    img_d32 = new_image("./d32.png")
    img_d34 = new_image("./d34.png")
    img_d46 = new_image("./d46.png")
    img_d48 = new_image("./d48.png")
    img_d65 = new_image("./d65.png")
    img_d66 = new_image("./d66.png")
    img_d81 = new_image("./d81.png")
    img_d82 = new_image("./d82.png")

    img_d09_orange = new_image("./d09_orange.png")
    img_d11_orange = new_image("./d11_orange.png")
    img_d12_orange = new_image("./d12_orange.png")
    img_d30_orange = new_image("./d30_orange.png")
    img_d31_orange = new_image("./d31_orange.png")
    img_d32_orange = new_image("./d32_orange.png")
    img_d34_orange = new_image("./d34_orange.png")
    img_d46_orange = new_image("./d46_orange.png")
    img_d48_orange = new_image("./d48_orange.png")
    img_d65_orange = new_image("./d65_orange.png")
    img_d66_orange = new_image("./d66_orange.png")
    img_d81_orange = new_image("./d81_orange.png")
    img_d82_orange = new_image("./d82_orange.png")

    img_d09_bleu = new_image("./d09_bleu.png")
    img_d11_bleu = new_image("./d11_bleu.png")
    img_d12_bleu = new_image("./d12_bleu.png")
    img_d30_bleu = new_image("./d30_bleu.png")
    img_d31_bleu = new_image("./d31_bleu.png")
    img_d32_bleu = new_image("./d32_bleu.png")
    img_d34_bleu = new_image("./d34_bleu.png")
    img_d46_bleu = new_image("./d46_bleu.png")
    img_d48_bleu = new_image("./d48_bleu.png")
    img_d65_bleu = new_image("./d65_bleu.png")
    img_d66_bleu = new_image("./d66_bleu.png")
    img_d81_bleu = new_image("./d81_bleu.png")
    img_d82_bleu = new_image("./d82_bleu.png")

    img_d09_cyan = new_image("./d09_cyan.png")
    img_d11_cyan = new_image("./d11_cyan.png")
    img_d12_cyan = new_image("./d12_cyan.png")
    img_d30_cyan = new_image("./d30_cyan.png")
    img_d31_cyan = new_image("./d31_cyan.png")
    img_d32_cyan = new_image("./d32_cyan.png")
    img_d34_cyan = new_image("./d34_cyan.png")
    img_d46_cyan = new_image("./d46_cyan.png")
    img_d48_cyan = new_image("./d48_cyan.png")
    img_d65_cyan = new_image("./d65_cyan.png")
    img_d66_cyan = new_image("./d66_cyan.png")
    img_d81_cyan = new_image("./d81_cyan.png")
    img_d82_cyan = new_image("./d82_cyan.png")

    img_icone_france = new_image("./icone_france.png")
    xy_icone_france = {"x": 1000, "y": 410, "w": 100, "h": 100}

    img_icone_monde = new_image("./icone_monde.png")
    xy_icone_monde = {"x": 1100, "y": 410, "w": 50, "h": 50}

    img_vierge = new_image("./carte_vierge.png")
    img_france_vierge = new_image("./france/france_vierge.png")

    img_bouton = new_image("./bouton.png")
    img_play = new_image("./play.png")
    img_pause = new_image("./pause.png")

    img_event = new_image("./event.png")
    xy_icone_event = {"x": offset_x + 1066*scale-110, "y": offset_y + 783*scale-40-100, "w": 50, "h": 50}

    img_meteo_on  = new_image("./meteo_on.png")
    img_meteo_off = new_image("./meteo_off.png")
    xy_icone_meteo = {"x": graphe["x"]+16+120, "y": graphe["y"]+16 + 10, "w": 32, "h": 32}
    xy_histoire = {"x": 940, "y": 60}

    img_bois = new_image("./bois.jpg")

    imgs_dep = []
    imgs_dep_bleu = []
    for (let i = 1; i <= 95; i++) {
        if (i < 10) {
            path_img = "./france_rouge_lr/dep0" + i + ".png"
        } else {
            path_img = "./france_rouge_lr/dep" + i + ".png"
        }
        img_dep = new_image(path_img)
        imgs_dep.push(img_dep)

        if (i < 10) {
            path_img = "./france_bleu_lr/dep0" + i + ".png"
        } else {
            path_img = "./france_bleu_lr/dep" + i + ".png"
        }
        img_dep_bleu = new_image(path_img)
        imgs_dep_bleu.push(img_dep_bleu)
    }

    img_dep09_bleu = new_image("./france_bleu_lr/dep09.png")
    img_dep11_bleu = new_image("./france_bleu_lr/dep11.png")
    img_dep12_bleu = new_image("./france_bleu_lr/dep12.png")
    img_dep30_bleu = new_image("./france_bleu_lr/dep30.png")
    img_dep31_bleu = new_image("./france_bleu_lr/dep31.png")
    img_dep32_bleu = new_image("./france_bleu_lr/dep32.png")
    img_dep34_bleu = new_image("./france_bleu_lr/dep34.png")
    img_dep46_bleu = new_image("./france_bleu_lr/dep46.png")
    img_dep48_bleu = new_image("./france_bleu_lr/dep48.png")
    img_dep65_bleu = new_image("./france_bleu_lr/dep65.png")
    img_dep66_bleu = new_image("./france_bleu_lr/dep66.png")
    img_dep81_bleu = new_image("./france_bleu_lr/dep81.png")
    img_dep82_bleu = new_image("./france_bleu_lr/dep82.png")

    img_jour = new_image("./icone_jour.png")
    img_semaine = new_image("./icone_semaine.png")
    img_mois = new_image("./icone_mois.png")

    mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
    semaines = ["du 01/01 au 07/01","du 08/01 au 14/01","du 15/01 au 21/01","du 22/01 au 28/01","du 29/01 au 04/02","du 05/02 au 11/02","du 12/02 au 18/02","du 19/02 au 25/02","du 26/02 au 04/03","du 05/03 au 11/03","du 12/03 au 18/03","du 19/03 au 25/03","du 26/03 au 01/04","du 02/04 au 08/04","du 09/04 au 15/04","du 16/04 au 22/04","du 23/04 au 29/04","du 30/04 au 06/05","du 07/05 au 13/05","du 14/05 au 20/05","du 21/05 au 27/05","du 28/05 au 03/06","du 04/06 au 10/06","du 11/06 au 17/06","du 18/06 au 24/06","du 25/06 au 01/07","du 02/07 au 08/07","du 09/07 au 15/07","du 16/07 au 22/07","du 23/07 au 29/07","du 30/07 au 05/08","du 06/08 au 12/08","du 13/08 au 19/08","du 20/08 au 26/08","du 27/08 au 02/09","du 03/09 au 09/09","du 10/09 au 16/09","du 17/09 au 23/09","du 24/09 au 30/09","du 01/10 au 07/10","du 08/10 au 14/10","du 15/10 au 21/10","du 22/10 au 28/10","du 29/10 au 04/11","du 05/11 au 11/11","du 12/11 au 18/11","du 19/11 au 25/11","du 26/11 au 02/12","du 03/12 au 09/12","du 10/12 au 16/12","du 17/12 au 23/12","du 24/12 au 30/12","du 31/12 au 06/01"]

    mois_maj = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    color_mois = ["#abcced", "#a3dee6", "#40ed5d", "#08bf26", "#6aad17", "#fec34d", "#ffa500", "#ff6600", "#ec9706", "#c49d1d", "#d1ba6d", "#ede6cc"]
    color_semaine=["#abcced","#abcced","#abcced","#abcced","#abcced","#a3dee6","#a3dee6","#a3dee6","#a3dee6","#40ed5d","#40ed5d","#40ed5d","#40ed5d","#08bf26","#08bf26","#08bf26","#08bf26","#08bf26","#6aad17","#6aad17","#6aad17","#6aad17","#fec34d","#fec34d","#fec34d","#fec34d","#ffa500","#ffa500","#ffa500","#ffa500","#ffa500","#ff6600","#ff6600","#ff6600","#ff6600","#ec9706","#ec9706","#ec9706","#ec9706","#c49d1d","#c49d1d","#c49d1d","#c49d1d","#c49d1d","#d1ba6d","#d1ba6d","#d1ba6d","#d1ba6d","#ede6cc","#ede6cc","#ede6cc","#ede6cc","#ede6cc"]

    etape_histoire = -1

    histoire = [
        {
            "titre": "1) La France comme un cœur qui bat",
            "texte": "En son sein, la région occitane joue un rôle essentiel à l’irrigation de l’organe national. Un flux touristique irrigue le pays entier, visant comme épicentre l’Occitanie. En août, par exemple, 37 millions de nuitées sont observables dans cette région de l’hexagone !"
        },
        {
            "titre": "2) Aucun département n’échappe à ce flux vital",
            "texte": "Du Finistère à la Meuse, nombreux sont les touristes qui affluent dans la région occitane. Certains départements se démarquent, notamment le Nord et le Rhône, qui totalisent 5 millions de nuitées annuelles. La répartition des touristes dans la région occitane est très inégale."//L'Hérault et les Pyrénées Orientales sont généralement les deux destinations préférées de la région. La Lozère et le Tarn-et-Garonne sont, en revanche, boudés."
        },
        {
            "titre": "3) Le battement à l’épreuve des saisons",
            "texte": "Bien que certaines périodes de l’année soient plus favorables au tourisme que d’autres, l’Occitanie accueille des touristes toute l'année. Hiver comme été, printemps comme automne, impossible de résister aux températures agréables de la région. Le pic se situe pendant les vacances d'été, avec 35% des nuitées annuelles en juillet et août."
        },
        {
            "titre": "4) L’inégalité d’un cœur",
            "texte": "Certains départements d'Occitanie attirent moins de touristes que d'autres. Avec 3,5 millions de nuitées cumulées sur toute l'année, la Lozère atteint à peine le tiers des nuitées de l'Hérault sur le seul mois d'août." // Cependant, il ne faut pas oublier que dans un cœur, tous les battements sont importants."
        },
        {
            "titre": "5) Comment expliquer cette puissance vitale ?",
            "texte": "Ce qui anime l'Occitanie, ce sont évidemment ses citoyens. La région s’anime autour de nombreux événements tout au long de l’année. Impossible de s'ennuyer l'été : tous les départements proposent des activités !"
        },
        {
            "titre": "6) Un cœur ne peut se suffire à lui-même",
            "texte": "Ne considérer qu'il n'y a que des touristes français en Occitanie reviendrait à priver un cœur de son corps. En effet, la région occitane attire des touristes au-delà des frontières tout au long de l'année, venant en grande partie des pays voisins. À nouveau, c'est en été qu'afflue le plus grand nombre d'entre eux."
//[Montrer la carte du monde avec une timelapse de l’impact de la région sur le temps]
        },
        {
            "titre": "7) Que retenir ?",
            "texte": "L’Occitanie n’irrigue pas seulement un cœur, mais un corps tout entier. À travers le temps et l’espace, la région sait se rendre attractive grâce à de multiples événements. Malgré des inégalités de répartition dans la région, l'Occitanie est un bassin attractif auprès des touristes français et étrangers. L'été, ce cœur bat la chamade. Enfin, deux départements se démarquent : l'Hérault et les Pyrénées Orientales concentrent en effet près de la moitié des nuitées annuelles et organisent 40% des événéments de la région."// Les régions françaises se répondent les unes aux autres. C’est cette harmonie qui fait de notre pays, un havre de bien-être."
        },
    ]

    offset_jours = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]
    start_mois = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
    nb_jours_mois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    mois_annee = []
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < nb_jours_mois[i]; j++) {
            mois_annee.push(i)
        }
    }
    init_nuitees()
    init_events()
    init_temp()
    init_volumes()
    init_departements()
    init_pixels()
    init_pixels_all()
    init_noms_dpt()
    lissage_donnees()
    compute_volumes_mois()
    legendes = [2000, 2000, 1000, 500, 500, 2000, 1000, 1000, 500, 1000, 1000, 1000, 5000, 1000, 500, 1000, 1000, 1000, 1000, 500, 2000, 1000, 500, 1000, 2000, 1000, 2000, 1000, 2000, 1000, 5000, 1000, 5000, 4000, 2000, 500, 2000, 5000, 500, 1000, 1000, 4000, 1000, 4000, 2000, 1000, 1000, 500, 2000, 1000, 2000, 500, 1000, 2000, 500, 1000, 2000, 500, 10000, 2000, 500, 5000, 4000, 2000, 500, 1000, 2000, 1000, 10000, 500, 2000, 2000, 1000, 2000, 10000, 5000, 5000, 5000, 1000, 2000, 1000, 1000, 2000, 1000, 2000, 1000, 1000, 1000, 1000, 500, 5000, 5000, 5000, 5000, 5000, 5000]

    legende = 200000
    legende_graphe = 1000000

    day = 171
    day_fixe = false

    mode = "nuitees"
    meteo = false
    event_on = false
    calendrier = "jour"
    calendrier_formule = {"jour": "par jour", "semaine": "par semaine", "mois": "par mois"}
    provenance = "france"

    auto_scroll = false
}


function animate() {

    if (dest_dpt == -1 && orig_dpt) {
        if (calendrier === "jour") {
            legende = 200000
        } else if (calendrier === "semaine") {
            legende = 1500000
        } else if (calendrier === "mois") {
            legende = 6000000
        }
    }

    time = new Date().getTime()

    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, c.width, c.height)

    ctx.drawImage(img_bois, (xy_histoire.x-50)*gs, 0, (1920-(xy_histoire.x-50))*gs, (offset_y-40)*gs)

    ctx.strokeStyle = "#ffffff"
    ctx.beginPath()
    ctx.moveTo(0, (offset_y-40.5)*gs)
    ctx.lineTo(1920*gs, (offset_y-40.5)*gs)
    ctx.moveTo((xy_histoire.x-50.5)*gs, 0)
    ctx.lineTo((xy_histoire.x-50.5)*gs, (offset_y-40)*gs)
    ctx.stroke()

    if (!auto_scroll && !day_fixe && xyMouse.x >= graphe["x"]*gs && xyMouse.x < (graphe["x"] + graphe["w"])*gs && xyMouse.y < graphe["y"]*gs && xyMouse.y > (graphe["y"] - graphe["h"]*1.5)*gs) {
        day = Math.floor((xyMouse.x - graphe["x"]*gs) / (graphe["w"]*gs/365))
    }

    ctx.drawImage(img_vierge, offset_x*gs, offset_y*gs, img_vierge.width*scale*gs, img_vierge.height*scale*gs)

    for (let i = 0; i < departements.length; i++) {
        // Nuitées
        if (mode === "nuitees") {
            if (i == dest_dpt) {
                ctx.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
                ctx.drawImage(departements[i]["img_bleu"], offset_x*gs, offset_y*gs, img_vierge.width*scale*gs, img_vierge.height*scale*gs)
            } else if (dest_dpt > -1) {
//                vol_dep = departements[dest_dpt]["volume"][day][parseInt(departements[i]["id"])-1]
                legende = 10000
//                ctx.globalAlpha = vol_dep/legende
//                ctx.drawImage(departements[i]["img"], offset_x, offset_y, img_vierge.width*scale, img_vierge.height*scale)
            } else if (orig_dpt > -1) {
                m_orig = 0
                if (calendrier === "jour") {
                    for (let j = 0; j < departements.length; j++) {
                        m_orig = Math.max(m_orig, departements[j]["volume"][day][orig_dpt])
                    }
                } else if (calendrier === "semaine") {
                    for (let j = 0; j < departements.length; j++) {
                        m_orig = Math.max(m_orig, departements[j]["volume"][Math.floor(day/7)][orig_dpt])
                    }
                } else if (calendrier === "mois") {
                    for (let j = 0; j < departements.length; j++) {
                        m_orig = Math.max(m_orig, departements[j]["volume"][start_mois[mois_annee[day]]][orig_dpt])
                    }
                }

                legende = m_orig
                if (calendrier === "jour") {
                    vol_dep = departements[i]["volume"][day][orig_dpt]
                } else if (calendrier === "semaine") {
                    vol_dep = departements[i]["volume"][Math.floor(day/7)][orig_dpt]
                } else if (calendrier === "mois") {
                    vol_dep = departements[i]["volume"][start_mois[mois_annee[day]]][orig_dpt]
                }
                ctx.globalAlpha = vol_dep/legende
                ctx.drawImage(departements[i]["img"], offset_x*gs, offset_y*gs, img_vierge.width*scale*gs, img_vierge.height*scale*gs)
            } else {
                if (calendrier === "jour") {
                    ctx.globalAlpha = departements[i]["nuitees"][day]/legende
                } else if (calendrier === "semaine") {
                    k = Math.floor(day/7)*7
                    if (k != 364) {
                        ctx.globalAlpha = (departements[i]["nuitees"][k]+departements[i]["nuitees"][k+1]+departements[i]["nuitees"][k+2]+departements[i]["nuitees"][k+3]+departements[i]["nuitees"][k+4]+departements[i]["nuitees"][k+5]+departements[i]["nuitees"][k+6])/legende
                    } else {
                        ctx.globalAlpha = departements[i]["nuitees"][k]/legende
                    }
                } else if (calendrier === "mois") {
                    tot = 0
                    for (let k = start_mois[mois_annee[day]]; k < start_mois[mois_annee[day]] + nb_jours_mois[mois_annee[day]]; k++) {
                        tot += departements[i]["nuitees"][k]
                    }
                    ctx.globalAlpha = tot/legende
                }
                ctx.drawImage(departements[i]["img"], offset_x*gs, offset_y*gs, img_vierge.width*scale*gs, img_vierge.height*scale*gs)
            }
        // Températures
        } else if (mode === "temp") {
            temp = departements[i]["temp"][day]
            if (temp >= 5) {
                ctx.globalAlpha = (temp-5)/30
                ctx.drawImage(departements[i]["img_orange"], offset_x*gs, offset_y*gs, img_vierge.width*scale*gs, img_vierge.height*scale*gs)
            } else {
                ctx.globalAlpha = 1-(temp+5)/10
                ctx.drawImage(departements[i]["img_cyan"], offset_x*gs, offset_y*gs, img_vierge.width*scale*gs, img_vierge.height*scale*gs)
            }
        }

        ctx.textAlign = "center"
        ctx.font = "" + (44*scale*gs) + "px Arial"
        ctx.globalAlpha = 0.95
        ctx.fillStyle = "#eeeeee"
        ctx.strokeText(departements[i]["id"], (offset_x + img_vierge.width*scale*departements[i]["x"])*gs, (offset_y + img_vierge.height*scale*departements[i]["y"]+10*scale)*gs)
        ctx.fillText(departements[i]["id"], (offset_x + img_vierge.width*scale*departements[i]["x"])*gs, (offset_y + img_vierge.height*scale*departements[i]["y"]+10*scale)*gs)
        ctx.font = "" + (22*scale*gs) + "px Arial"
        ctx.fillStyle = "#eeeeee"
        ctx.strokeText(departements[i]["nom"], (offset_x + img_vierge.width*scale*departements[i]["x"])*gs, (offset_y + img_vierge.height*scale*departements[i]["y"]+35*scale)*gs)
        ctx.fillText(departements[i]["nom"], (offset_x + img_vierge.width*scale*departements[i]["x"])*gs, (offset_y + img_vierge.height*scale*departements[i]["y"]+35*scale)*gs)
        ctx.globalAlpha = 1
    }

    for (let i = 0; i < departements.length; i++) {
        if (event_on) {
            liste_events = []
            if (calendrier === "jour") {
                for (let j = 0; j < dpt_evt[i].length; j++) {
                    if (day >= dpt_evt[i][j]["debut"] && day <= dpt_evt[i][j]["fin"]) {
                        liste_events.push(dpt_evt[i][j]["nom"])
                    }
                }
            } else if (calendrier === "semaine") {
                for (let j = 0; j < dpt_evt[i].length; j++) {
                    overlap = false
                    for (let k = Math.floor(day/7)*7; k < Math.floor(day/7)*7+7; k++) {
                        if (k >= dpt_evt[i][j]["debut"] && k <= dpt_evt[i][j]["fin"]) {
                            overlap = true
                        }
                    }
                    if (overlap) {
                        liste_events.push(dpt_evt[i][j]["nom"])
                    }
                }
            } else if (calendrier === "mois") {
                for (let j = 0; j < dpt_evt[i].length; j++) {
                    overlap = false
                    for (let k = start_mois[mois_annee[day]]; k < start_mois[mois_annee[day]] + nb_jours_mois[mois_annee[day]]; k++) {
                        if (k >= dpt_evt[i][j]["debut"] && k <= dpt_evt[i][j]["fin"]) {
                            overlap = true
                        }
                    }
                    if (overlap) {
                        liste_events.push(dpt_evt[i][j]["nom"])
                    }
                }
            }
            if (liste_events.length > 0) {
                ctx.drawImage(img_event, (offset_x + img_vierge.width*scale*departements[i]["x"]-16)*gs, (offset_y + img_vierge.height*scale*departements[i]["y"]+35*scale)*gs, 32*gs, 32*gs)
                ctx.textAlign = "center"
                ctx.font = "" + (10*gs) + "px Arial"
                ctx.strokeText(liste_events.length, (offset_x + img_vierge.width*scale*departements[i]["x"]+30*scale)*gs, (offset_y + img_vierge.height*scale*departements[i]["y"]+65*scale)*gs)
                ctx.fillText(liste_events.length, (offset_x + img_vierge.width*scale*departements[i]["x"]+30*scale)*gs, (offset_y + img_vierge.height*scale*departements[i]["y"]+65*scale)*gs)

                mots = liste_events[Math.floor(time/3000)%liste_events.length].split(" ")
                ligne = 0
                mot = 0
                texte_to_print = ""
                while (mot < mots.length && mot < 100) {
                    texte_to_print_potentiel = texte_to_print + mots[mot] + " "
                    if (ctx.measureText(texte_to_print_potentiel).width < 160*gs) {
                        texte_to_print = texte_to_print_potentiel
                        mot++
                    } else {
                        ctx.strokeText(texte_to_print, (offset_x + img_vierge.width*scale*departements[i]["x"])*gs, (offset_y + img_vierge.height*scale*departements[i]["y"]+65*scale+15+13*ligne)*gs)
                        ctx.fillText(texte_to_print, (offset_x + img_vierge.width*scale*departements[i]["x"])*gs, (offset_y + img_vierge.height*scale*departements[i]["y"]+65*scale+15+13*ligne)*gs)
                        texte_to_print = ""
                        ligne++
                    }
                }

                ctx.strokeText(texte_to_print, (offset_x + img_vierge.width*scale*departements[i]["x"])*gs, (offset_y + img_vierge.height*scale*departements[i]["y"]+65*scale+15+13*ligne)*gs)
                ctx.fillText(texte_to_print, (offset_x + img_vierge.width*scale*departements[i]["x"])*gs, (offset_y + img_vierge.height*scale*departements[i]["y"]+65*scale+15+13*ligne)*gs)
            }
        }
    }

    if (dest_dpt == -1) {
        ctx.strokeStyle = "#ff0000"
        for (let i = 1; i <= 200; i++) {
            ctx.globalAlpha = i/200
            ctx.beginPath()
            ctx.moveTo((0.5+offset_x + img_vierge.width*scale+i-200-20)*gs, (offset_y + img_vierge.height*scale-50)*gs)
            ctx.lineTo((0.5+offset_x + img_vierge.width*scale+i-200-20)*gs, (offset_y + img_vierge.height*scale-40-50)*gs)
            ctx.stroke()
        }

        ctx.strokeStyle = "#ffffff"
        ctx.beginPath()
        ctx.moveTo((0.5+offset_x + img_vierge.width*scale-200-20)*gs, (offset_y + img_vierge.height*scale-50)*gs)
        ctx.lineTo((0.5+offset_x + img_vierge.width*scale-200-20)*gs, (offset_y + img_vierge.height*scale-40-50)*gs)
        ctx.lineTo((0.5+offset_x + img_vierge.width*scale-20)*gs, (offset_y + img_vierge.height*scale-40-50)*gs)
        ctx.lineTo((0.5+offset_x + img_vierge.width*scale-20)*gs, (offset_y + img_vierge.height*scale-50)*gs)
        ctx.lineTo((0.5+offset_x + img_vierge.width*scale-200-20)*gs, (offset_y + img_vierge.height*scale-50)*gs)
        ctx.stroke()
    } else if (dest_dpt > -1 && xy_icone_monde.w < 100) {
        ctx.strokeStyle = "#ff0000"
        for (let i = 1; i <= 200; i++) {
            ctx.globalAlpha = i/200
            ctx.beginPath()
            ctx.moveTo((0.5+offset_x_prov + 600*scale+i+240-20)*gs, (offset_y_prov + img_vierge.height*scale-50)*gs)
            ctx.lineTo((0.5+offset_x_prov + 600*scale+i+240-20)*gs, (offset_y_prov + img_vierge.height*scale-40-50)*gs)
            ctx.stroke()
        }

        ctx.strokeStyle = "#ffffff"
        ctx.beginPath()
        ctx.moveTo((0.5+offset_x_prov + 600*scale+1+240-20)*gs, (offset_y_prov + img_vierge.height*scale-50)*gs)
        ctx.lineTo((0.5+offset_x_prov + 600*scale+1+240-20)*gs, (offset_y_prov + img_vierge.height*scale-40-50)*gs)
        ctx.lineTo((0.5+offset_x_prov + 600*scale+200+240-20)*gs, (offset_y_prov + img_vierge.height*scale-40-50)*gs)
        ctx.lineTo((0.5+offset_x_prov + 600*scale+200+240-20)*gs, (offset_y_prov + img_vierge.height*scale-50)*gs)
        ctx.lineTo((0.5+offset_x_prov + 600*scale+1+240-20)*gs, (offset_y_prov + img_vierge.height*scale-50)*gs)
        ctx.stroke()
    }

    if (!event_on) {
        ctx.globalAlpha = 0.25
    }
    ctx.drawImage(img_event, (xy_icone_event.x-0.5*xy_icone_event.w)*gs, (xy_icone_event.y-0.5*xy_icone_event.h)*gs, xy_icone_event.w*gs, xy_icone_event.h*gs)
    ctx.globalAlpha = 1

    ctx.textAlign = "center"
    ctx.font = "" + (14*gs) + "px Arial"

    if (dest_dpt == -1 && orig_dpt == -1) {
        ctx.strokeText(format(""+legende), (0.5+offset_x + img_vierge.width*scale-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
        ctx.fillText(format(""+legende), (0.5+offset_x + img_vierge.width*scale-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
        ctx.strokeText("0", (0.5+offset_x + img_vierge.width*scale-200-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
        ctx.fillText("0", (0.5+offset_x + img_vierge.width*scale-200-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
    } else if (dest_dpt > -1) {
        ctx.strokeText("0", (0.5+offset_x_prov + 600*scale+1+240-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
        ctx.fillText("0", (0.5+offset_x_prov + 600*scale+1+240-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)

        if (calendrier === "jour") {
            vv = 2000//departements[dest_dpt]["volume"][day]
        } else if (calendrier === "semaine") {
            vv = 15000//departements[dest_dpt]["volume"][Math.floor(day/7)]
        } else if (calendrier === "mois") {
            vv = 50000//departements[dest_dpt]["volume"][start_mois[mois_annee[day]]]
        }

        ctx.strokeText(""+vv, (0.5+offset_x_prov + 200+600*scale+1+240-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
        ctx.fillText(""+vv, (0.5+offset_x_prov + 200+600*scale+1+240-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)


    } else if (orig_dpt > -1) {
        if (calendrier === "jour") {
            ctx.strokeText(format(""+legende), (0.5+offset_x + img_vierge.width*scale-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
            ctx.fillText(format(""+legende), (0.5+offset_x + img_vierge.width*scale-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
        } else if (calendrier === "semaine") {
            ctx.strokeText(format(""+(legende*7)), (0.5+offset_x + img_vierge.width*scale-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
            ctx.fillText(format(""+(legende*7)), (0.5+offset_x + img_vierge.width*scale-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
        } else if (calendrier === "mois") {
            ctx.strokeText(format(""+(legende*30)), (0.5+offset_x + img_vierge.width*scale-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
            ctx.fillText(format(""+(legende*30)), (0.5+offset_x + img_vierge.width*scale-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
        }
        ctx.strokeText("0", (0.5+offset_x + img_vierge.width*scale-200-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
        ctx.fillText("0", (0.5+offset_x + img_vierge.width*scale-200-20)*gs, (offset_y + img_vierge.height*scale-44-50)*gs)
    }

    date = new Date(dates[day])
    jour = date.getDate()
    month = mois[date.getMonth()]

    ctx.beginPath()
    ctx.moveTo(gs*(0.5+graphe["x"]-10), (0.5+graphe["y"])*gs)
    ctx.lineTo(gs*(0.5+graphe["x"]+graphe["w"]+10), (0.5+graphe["y"])*gs)
    ctx.lineTo(gs*(0.5+graphe["x"]+graphe["w"]+5), (0.5+graphe["y"]+5)*gs)
    ctx.moveTo(gs*(0.5+graphe["x"]+graphe["w"]+10), (0.5+graphe["y"])*gs)
    ctx.lineTo(gs*(0.5+graphe["x"]+graphe["w"]+5), (0.5+graphe["y"]-5)*gs)
    ctx.moveTo(gs*(0.5+graphe["x"]), (0.5+graphe["y"])*gs)
    ctx.lineTo(gs*(0.5+graphe["x"]), (0.5+graphe["y"]-graphe["h"]*1.15)*gs)
    ctx.lineTo(gs*(0.5+graphe["x"]+5), (0.5+graphe["y"]-graphe["h"]*1.15+5)*gs)
    ctx.moveTo(gs*(0.5+graphe["x"]), (0.5+graphe["y"]-graphe["h"]*1.15)*gs)
    ctx.lineTo(gs*(0.5+graphe["x"]-5), (0.5+graphe["y"]-graphe["h"]*1.15+5)*gs)
    ctx.moveTo(gs*(0.5+graphe["x"]), (0.5+graphe["y"]-graphe["h"]*0.5)*gs)
    ctx.lineTo(gs*(0.5+graphe["x"]-5), (0.5+graphe["y"]-graphe["h"]*0.5)*gs)
    if (meteo) {
        ctx.moveTo(gs*(0.5+graphe["x"]), (0.5+graphe["y"]-0.1*graphe["h"])*gs)
        ctx.lineTo(gs*(0.5+graphe["x"]-5), (0.5+graphe["y"]-0.1*graphe["h"])*gs)
        ctx.moveTo(gs*(0.5+graphe["x"]), (0.5+graphe["y"]-0.1*graphe["h"]-25/30*graphe["h"])*gs)
        ctx.lineTo(gs*(0.5+graphe["x"]-5), (0.5+graphe["y"]-0.1*graphe["h"]-25/30*graphe["h"])*gs)
    }
    ctx.stroke()

    total_affichage = 0
    x_print = -1
    y_print = -1
    val_print = -1

    // Tracé du graphe
    ctx.beginPath()
    ctx.moveTo(0.5+graphe["x"]*gs, 0.5+graphe["y"]*gs)

    step = graphe["w"] / 365
    if (calendrier === "jour") {
        for (let i = 0; i < 365; i++) {
            if (dest_dpt == -1 && orig_dpt == -1) {
                ctx.lineTo((0.5+graphe["x"]+step*i)*gs, (0.5+graphe["y"]-graphe["h"]*total[i]/legende_graphe)*gs)
            } else if (dest_dpt > -1) {
                ctx.lineTo((0.5+graphe["x"]+step*i)*gs, (0.5+graphe["y"]-graphe["h"]*departements[dest_dpt]["nuitees"][i]/departements[dest_dpt]["leg"])*gs)
            } else if (orig_dpt > -1) {
                nb_orig = 0
                for (let j = 0; j < departements.length; j++) {
                    nb_orig += departements[j]["volume"][i][orig_dpt]
                }
                ctx.lineTo((0.5+graphe["x"]+step*i)*gs, (0.5+graphe["y"]-graphe["h"]*nb_orig/(legendes[orig_dpt]*5))*gs)
            }
            if (offset_jours.indexOf(i+1) >= 0) {
                ctx.lineTo((0.5+graphe["x"]+step*i)*gs, (0.5+graphe["y"])*gs)
                ctx.stroke()
                ctx.fillStyle = color_mois[offset_jours.indexOf(i+1)]
                ctx.globalAlpha = 0.7
                ctx.fill()
                ctx.globalAlpha = 1

                ctx.beginPath()
                ctx.moveTo((0.5+graphe["x"]+step*i)*gs, (0.5+graphe["y"])*gs)
                if (dest_dpt == -1 && orig_dpt == -1) {
                    ctx.lineTo((0.5+graphe["x"]+step*i)*gs, (0.5+graphe["y"]-graphe["h"]*total[i]/legende_graphe)*gs)
                } else if (dest_dpt > -1) {
                    ctx.lineTo((0.5+graphe["x"]+step*i)*gs, (0.5+graphe["y"]-graphe["h"]*departements[dest_dpt]["nuitees"][i]/departements[dest_dpt]["leg"])*gs)
                } else if (orig_dpt > -1) {
                    nb_orig = 0
                    for (let j = 0; j < departements.length; j++) {
                        nb_orig += departements[j]["volume"][i][orig_dpt]
                    }
                    ctx.lineTo((0.5+graphe["x"]+step*i)*gs, (0.5+graphe["y"]-graphe["h"]*nb_orig/(legendes[orig_dpt]*5))*gs)
                }
            }
        }
        ctx.lineTo((0.5+graphe["x"]+step*365)*gs, (0.5+graphe["y"])*gs)
        ctx.lineTo((0.5+graphe["x"])*gs, (0.5+graphe["y"])*gs)
        ctx.stroke()
        ctx.fillStyle = "#0000ff"
        ctx.globalAlpha = 0.3
        ctx.fill()
        ctx.globalAlpha = 1
    } else if (calendrier === "semaine") {
        step_semaine = 7*step
        for (let i = 0; i < 52; i++) {
            if (dest_dpt == -1 && orig_dpt == -1) {
                total_m = (total[7*i]+total[7*i+1]+total[7*i+2]+total[7*i+3]+total[7*i+4]+total[7*i+5]+total[7*i+6])/7
            } else if (dest_dpt > -1) {
                total_m = (departements[dest_dpt]["nuitees"][7*i+0]+departements[dest_dpt]["nuitees"][7*i+1]+departements[dest_dpt]["nuitees"][7*i+2]+departements[dest_dpt]["nuitees"][7*i+3]+departements[dest_dpt]["nuitees"][7*i+4]+departements[dest_dpt]["nuitees"][7*i+5]+departements[dest_dpt]["nuitees"][7*i+6])/7
            } else if (orig_dpt > -1) {
                total_m = 0
                for (let j = 0; j < departements.length; j++) {
                    total_m += (departements[j]["volume"][7*i][orig_dpt]+departements[j]["volume"][7*i+1][orig_dpt]+departements[j]["volume"][7*i+2][orig_dpt]+departements[j]["volume"][7*i+3][orig_dpt]+departements[j]["volume"][7*i+4][orig_dpt]+departements[j]["volume"][7*i+5][orig_dpt]+departements[j]["volume"][7*i+6][orig_dpt])/7
                }
            }
            ctx.beginPath()
            ctx.moveTo((0.5+graphe["x"]+step_semaine*i)*gs, (0.5+graphe["y"])*gs)

            if (dest_dpt == -1 && orig_dpt == -1) {
                ctx.lineTo((0.5+graphe["x"]+step_semaine*i)*gs, (0.5+graphe["y"]-graphe["h"]*(total_m/legende_graphe))*gs)
                ctx.lineTo((graphe["x"]+step_semaine*(i+1))*gs, (0.5+graphe["y"]-graphe["h"]*(total_m/legende_graphe))*gs)
            } else if (dest_dpt > -1) {
                ctx.lineTo((0.5+graphe["x"]+step_semaine*i)*gs, (0.5+graphe["y"]-graphe["h"]*(total_m/departements[dest_dpt]["leg"]))*gs)
                ctx.lineTo((graphe["x"]+step_semaine*(i+1))*gs, (0.5+graphe["y"]-graphe["h"]*(total_m/departements[dest_dpt]["leg"]))*gs)
            } else if (orig_dpt > -1) {
                ctx.lineTo((0.5+graphe["x"]+step_semaine*i)*gs, (0.5+graphe["y"]-graphe["h"]*(total_m/(legendes[orig_dpt]*5)))*gs)
                ctx.lineTo((graphe["x"]+step_semaine*(i+1))*gs, (0.5+graphe["y"]-graphe["h"]*(total_m/(legendes[orig_dpt]*5)))*gs)
            }
            ctx.lineTo((graphe["x"]+step_semaine*(i+1))*gs, (0.5+graphe["y"])*gs)
            ctx.lineTo((0.5+graphe["x"]+step_semaine*i)*gs, (0.5+graphe["y"])*gs)
            ctx.stroke()
            ctx.fillStyle = color_semaine[i]
            if (Math.floor(day/7) == i) {
                x_print = 0.5+graphe["x"]+step_semaine*(i+0.5)
                if (dest_dpt == -1 && orig_dpt == -1) {
                    y_print = 0.5+graphe["y"]-graphe["h"]*(total_m/legende_graphe)-10
                } else if (dest_dpt > -1) {
                    y_print = 0.5+graphe["y"]-graphe["h"]*(total_m/departements[dest_dpt]["leg"])-10
                } else if (orig_dpt > -1) {
                    y_print = 0.5+graphe["y"]-graphe["h"]*(total_m/(legendes[orig_dpt]*5))-10
                }
                val_print = format(""+Math.round(total_m*7))
                ctx.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
            } else {
                ctx.globalAlpha = 0.7
            }
            ctx.fill()
            ctx.globalAlpha = 1
        }
    } else if (calendrier === "mois") {
        for (let i = 0; i < 12; i++) {
            if (dest_dpt == -1 && orig_dpt == -1) {
                total_m = 0
                for (let j = start_mois[i]; j < start_mois[i]+nb_jours_mois[i]; j++) {
                    total_m += total[j]
                }
                total_m /= 30
            } else if (dest_dpt > -1) {
                total_m = 0
                for (let j = start_mois[i]; j < start_mois[i]+nb_jours_mois[i]; j++) {
                    total_m += departements[dest_dpt]["nuitees"][j]
                }
                total_m /= 30
            } else if (orig_dpt > -1) {
                total_m = 0
                for (let j = 0; j < departements.length; j++) {
                    for (let k = start_mois[i]; k < start_mois[i]+nb_jours_mois[i]; k++) {
                        total_m += departements[j]["volume"][k][orig_dpt]
                    }
                }
                total_m /= 30
            }
            ctx.beginPath()
            ctx.moveTo((0.5+graphe["x"]+step*start_mois[i])*gs, (0.5+graphe["y"])*gs)
            ctx.lineTo((0.5+graphe["x"]+step*(start_mois[i]+nb_jours_mois[i]))*gs, (0.5+graphe["y"])*gs)

            if (dest_dpt == -1 && orig_dpt == -1) {
                ctx.lineTo((0.5+graphe["x"]+step*(start_mois[i]+nb_jours_mois[i]))*gs, (0.5+graphe["y"]-graphe["h"]*(total_m/legende_graphe))*gs)
                ctx.lineTo((0.5+graphe["x"]+step*start_mois[i])*gs, (0.5+graphe["y"]-graphe["h"]*(total_m/legende_graphe))*gs)
            } else if (dest_dpt > -1) {
                ctx.lineTo((0.5+graphe["x"]+step*(start_mois[i]+nb_jours_mois[i]))*gs, (0.5+graphe["y"]-graphe["h"]*(total_m/departements[dest_dpt]["leg"]))*gs)
                ctx.lineTo((0.5+graphe["x"]+step*start_mois[i])*gs, (0.5+graphe["y"]-graphe["h"]*(total_m/departements[dest_dpt]["leg"]))*gs)
            } else if (orig_dpt > -1) {
                ctx.lineTo((0.5+graphe["x"]+step*(start_mois[i]+nb_jours_mois[i]))*gs, (0.5+graphe["y"]-graphe["h"]*(total_m/(legendes[orig_dpt]*5)))*gs)
                ctx.lineTo((0.5+graphe["x"]+step*start_mois[i])*gs, (0.5+graphe["y"]-graphe["h"]*(total_m/(legendes[orig_dpt]*5)))*gs)
            }

            ctx.lineTo((0.5+graphe["x"]+step*start_mois[i])*gs, (0.5+graphe["y"])*gs)
            ctx.stroke()
            ctx.fillStyle = color_mois[i]
            if (mois_annee[day] == i) {
                x_print = 0.5+graphe["x"]+(start_mois[i]+offset_jours[i])/2*step
                if (dest_dpt == -1 && orig_dpt == -1) {
                    y_print = 0.5+graphe["y"]-graphe["h"]*(total_m/legende_graphe)-10
                } else if (dest_dpt > -1) {
                    y_print = 0.5+graphe["y"]-graphe["h"]*(total_m/departements[dest_dpt]["leg"])-10
                } else if (orig_dpt > -1) {
                    y_print = 0.5+graphe["y"]-graphe["h"]*(total_m/(legendes[orig_dpt]*5))-10
                }
                val_print = format(""+Math.round(total_m*30))
                ctx.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
                total_affichage = Math.round(total_m*30)
            } else {
                ctx.globalAlpha = 0.7
            }
            ctx.fill()
            ctx.globalAlpha = 1
        }
    }


    // Courbe de température
    if (meteo) {
        ctx.beginPath()
        if (calendrier === "jour") {
            for (let i = 0; i < 365; i++) {
                if (dest_dpt == -1) {
                    if (i == 0) {
                        ctx.moveTo((0.5+graphe["x"]+step*i)*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moyenne[i]*graphe["h"]/30)*gs)
                    } else {
                        ctx.lineTo((0.5+graphe["x"]+step*i)*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moyenne[i]*graphe["h"]/30)*gs)
                    }
                } else {
                    if (i == 0) {
                        ctx.moveTo((0.5+graphe["x"]+step*i)*gs, (0.5+graphe["y"]-0.1*graphe["h"]-departements[dest_dpt]["temp"][i]*graphe["h"]/30)*gs)
                    } else {
                        ctx.lineTo((0.5+graphe["x"]+step*i)*gs, (0.5+graphe["y"]-0.1*graphe["h"]-departements[dest_dpt]["temp"][i]*graphe["h"]/30)*gs)
                    }
                }
            }
        } else if (calendrier === "semaine") {
            for (let i = 0; i < 52; i++) {
                if (dest_dpt == -1) {
                    temp_moy_semaine = Math.round((temp_moyenne[7*i]+temp_moyenne[7*i+1]+temp_moyenne[7*i+2]+temp_moyenne[7*i+3]+temp_moyenne[7*i+4]+temp_moyenne[7*i+5]+temp_moyenne[7*i+6])/7)
                    if (i == 0) {
                        ctx.moveTo((0.5+graphe["x"]+step_semaine*i)*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moy_semaine*graphe["h"]/30)*gs)
                    } else {
                        ctx.lineTo((0.5+graphe["x"]+step_semaine*i)*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moy_semaine*graphe["h"]/30)*gs)
                    }
                    if (i == 51) {
                        ctx.lineTo((0.5+graphe["x"]+step_semaine*(i+1))*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moy_semaine*graphe["h"]/30)*gs)
                    }
                } else {
                    temp_moy_semaine = Math.round((departements[dest_dpt]["temp"][7*i]+departements[dest_dpt]["temp"][7*i+1]+departements[dest_dpt]["temp"][7*i+2]+departements[dest_dpt]["temp"][7*i+3]+departements[dest_dpt]["temp"][7*i+4]+departements[dest_dpt]["temp"][7*i+5]+departements[dest_dpt]["temp"][7*i+6])/7)
                    if (i == 0) {
                        ctx.moveTo((0.5+graphe["x"]+step_semaine*i)*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moy_semaine*graphe["h"]/30)*gs)
                    } else {
                        ctx.lineTo((0.5+graphe["x"]+step_semaine*i)*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moy_semaine*graphe["h"]/30)*gs)
                    }
                    if (i == 51) {
                        ctx.lineTo((0.5+graphe["x"]+step_semaine*(i+1))*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moy_semaine*graphe["h"]/30)*gs)
                    }
                }
            }
        } else if (calendrier === "mois") {
            for (let i = 0; i < 12; i++) {
                if (dest_dpt == -1) {
                    temp_moy_mois = 0
                    for (let j = 0; j < 30; j++) {
                        temp_moy_mois += temp_moyenne[i*30+j]
                    }
                    temp_moy_mois /= 30
                    if (i == 0) {
                        ctx.moveTo((0.5+graphe["x"]+step*start_mois[i])*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moy_mois*graphe["h"]/30)*gs)
                    } else {
                        ctx.lineTo((0.5+graphe["x"]+step*start_mois[i])*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moy_mois*graphe["h"]/30)*gs)
                    }
                    if (i == 11) {
                        ctx.lineTo((0.5+graphe["x"]+step*365)*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moy_mois*graphe["h"]/30)*gs)
                    }
                } else {
                    temp_moy_mois = 0
                    for (let j = 0; j < 30; j++) {
                        temp_moy_mois += departements[dest_dpt]["temp"][i*30+j]
                    }
                    temp_moy_mois /= 30
                    if (i == 0) {
                        ctx.moveTo((0.5+graphe["x"]+step*start_mois[i])*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moy_mois*graphe["h"]/30)*gs)
                    } else {
                        ctx.lineTo((0.5+graphe["x"]+step*start_mois[i])*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moy_mois*graphe["h"]/30)*gs)
                    }
                    if (i == 11) {
                        ctx.lineTo((0.5+graphe["x"]+step*365)*gs, (0.5+graphe["y"]-0.1*graphe["h"]-temp_moy_mois*graphe["h"]/30)*gs)
                    }

                }
            }

        }
        ctx.strokeStyle = "#ffa500"
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 1
    }



    if (x_print > -1) {
        ctx.strokeStyle = "#ffffff"
        ctx.fillStyle = "#ccccff"
        ctx.textAlign = "center"
        ctx.font = "" + (14*gs) + "px Arial"
        ctx.strokeText(val_print, x_print*gs, y_print*gs)
        ctx.fillText(val_print, x_print*gs, y_print*gs)
    }

    if (meteo) {
        ctx.drawImage(img_meteo_on, (xy_icone_meteo["x"]-xy_icone_meteo["w"]/2)*gs, (xy_icone_meteo["y"]-xy_icone_meteo["h"]/2)*gs, xy_icone_meteo["w"]*gs, xy_icone_meteo["h"]*gs)
    } else {
        ctx.globalAlpha = 0.5
        ctx.drawImage(img_meteo_on, (xy_icone_meteo["x"]-xy_icone_meteo["w"]/2)*gs, (xy_icone_meteo["y"]-xy_icone_meteo["h"]/2)*gs, xy_icone_meteo["w"]*gs, xy_icone_meteo["h"]*gs)
        ctx.drawImage(img_meteo_off, (xy_icone_meteo["x"]-xy_icone_meteo["w"]/2)*gs, (xy_icone_meteo["y"]-xy_icone_meteo["h"]/2)*gs, xy_icone_meteo["w"]*gs, xy_icone_meteo["h"]*gs)
        ctx.globalAlpha = 1
    }

    if (auto_scroll) {
        ctx.drawImage(img_pause, (xy_icone_meteo["x"]+15.75*xy_icone_meteo["w"])*gs, (xy_icone_meteo["y"]-xy_icone_meteo["h"]/2)*gs, xy_icone_meteo["w"]*gs, xy_icone_meteo["h"]*gs)
        frame ++
        if (frame >= 3) {
            frame = 0
            day = (day+2)%365
        }
    } else {
        ctx.drawImage(img_play, (xy_icone_meteo["x"]+15.75*xy_icone_meteo["w"])*gs, (xy_icone_meteo["y"]-xy_icone_meteo["h"]/2)*gs, xy_icone_meteo["w"]*gs, xy_icone_meteo["h"]*gs)
    }

    if (calendrier !== "jour") {
        ctx.globalAlpha = 0.3
    }
    ctx.drawImage(img_jour, (xy_icone_meteo["x"]-4.25*xy_icone_meteo["w"])*gs, (xy_icone_meteo["y"]-xy_icone_meteo["h"]/2)*gs, xy_icone_meteo["w"]*gs, xy_icone_meteo["h"]*gs)
    ctx.globalAlpha = 1

    if (calendrier !== "semaine") {
        ctx.globalAlpha = 0.3
    }
    ctx.drawImage(img_semaine, (xy_icone_meteo["x"]-3.00*xy_icone_meteo["w"])*gs, (xy_icone_meteo["y"]-xy_icone_meteo["h"]/2)*gs, xy_icone_meteo["w"]*gs, xy_icone_meteo["h"]*gs)
    ctx.globalAlpha = 1

    if (calendrier !== "mois") {
        ctx.globalAlpha = 0.3
    }
    ctx.drawImage(img_mois, (xy_icone_meteo["x"]-1.75*xy_icone_meteo["w"])*gs, (xy_icone_meteo["y"]-xy_icone_meteo["h"]/2)*gs, xy_icone_meteo["w"]*gs, xy_icone_meteo["h"]*gs)
    ctx.globalAlpha = 1



    // Textes
    if (calendrier === "jour") {
        ctx.beginPath()
        if (dest_dpt == -1 && orig_dpt == -1) {
            ctx.arc((0.5+graphe["x"]+step*day)*gs, (0.5+graphe["y"]-graphe["h"]*total[day]/legende_graphe)*gs, 3*gs, 0, 2*Math.PI)
        } else if (dest_dpt > -1) {
            ctx.arc((0.5+graphe["x"]+step*day)*gs, (0.5+graphe["y"]-graphe["h"]*departements[dest_dpt]["nuitees"][day]/departements[dest_dpt]["leg"])*gs, 3*gs, 0, 2*Math.PI)
        } else if (orig_dpt > -1) {
            nb_orig = 0
            for (let j = 0; j < departements.length; j++) {
                nb_orig += departements[j]["volume"][day][orig_dpt]
            }
            ctx.arc((0.5+graphe["x"]+step*day)*gs, (0.5+graphe["y"]-graphe["h"]*nb_orig/(legendes[orig_dpt]*5))*gs, 3*gs, 0, 2*Math.PI)
        }
        ctx.fillStyle = "#ccccff"
        ctx.stroke()
        ctx.fill()
    }

    ctx.strokeStyle = "#ffffff"
    ctx.fillStyle = "#ccccff"
    ctx.textAlign = "center"
    ctx.font = "" + (14*gs) + "px Arial"
    if (calendrier === "jour") {
        if (dest_dpt == -1) {
            nb_nuitees = "" + total[day]
        } else {
            nb_nuitees = "" + departements[dest_dpt]["nuitees"][day]
        }
        nb_nuitees = format(nb_nuitees)

        if (dest_dpt == -1 && orig_dpt == -1) {
            ctx.strokeText(nb_nuitees, (0.5+graphe["x"]+step*day)*gs, (0.5+graphe["y"]-graphe["h"]*total[day]/legende_graphe-10)*gs)
            ctx.fillText(nb_nuitees, (0.5+graphe["x"]+step*day)*gs, (0.5+graphe["y"]-graphe["h"]*total[day]/legende_graphe-10)*gs)
        } else if (dest_dpt > -1) {
            ctx.strokeText(nb_nuitees, (0.5+graphe["x"]+step*day)*gs, (0.5+graphe["y"]-graphe["h"]*departements[dest_dpt]["nuitees"][day]/departements[dest_dpt]["leg"]-10)*gs)
            ctx.fillText(nb_nuitees, (0.5+graphe["x"]+step*day)*gs, (0.5+graphe["y"]-graphe["h"]*departements[dest_dpt]["nuitees"][day]/departements[dest_dpt]["leg"]-10)*gs)
        } else if (orig_dpt > -1) {
            ctx.strokeText(nb_orig, (0.5+graphe["x"]+step*day)*gs, (0.5+graphe["y"]-graphe["h"]*nb_orig/(legendes[orig_dpt]*5)-10)*gs)
            ctx.fillText(nb_orig, (0.5+graphe["x"]+step*day)*gs, (0.5+graphe["y"]-graphe["h"]*nb_orig/(legendes[orig_dpt]*5)-10)*gs)
        }
    }

    ctx.strokeStyle = "#ffffff"
    ctx.fillStyle = "#eeeeee"
    ctx.font = "" + (28*gs) + "px Arial"
    if (calendrier === "jour") {
        ctx.strokeText(jour + " " + month + " 2018", (0.5+graphe["x"]+step*365/2)*gs, (0.5+graphe["y"]+36)*gs)
        ctx.fillText(jour + " " + month + " 2018", (0.5+graphe["x"]+step*365/2)*gs, (0.5+graphe["y"]+36)*gs)
    } else if (calendrier === "semaine") {
        ctx.strokeText("Semaine " + (1+Math.floor(day/7)) + " " + semaines[Math.floor(day/7)], (0.5+graphe["x"]+step*365/2)*gs, (0.5+graphe["y"]+36)*gs)
        ctx.fillText("Semaine " + (1+Math.floor(day/7)) + " " + semaines[Math.floor(day/7)], (0.5+graphe["x"]+step*365/2)*gs, (0.5+graphe["y"]+36)*gs)
    } else if (calendrier === "mois") {
        ctx.strokeText(mois_maj[mois_annee[day]] + " 2018", (0.5+graphe["x"]+step*365/2)*gs, (0.5+graphe["y"]+36)*gs)
        ctx.fillText(mois_maj[mois_annee[day]] + " 2018", (0.5+graphe["x"]+step*365/2)*gs, (0.5+graphe["y"]+36)*gs)
    }

    ctx.drawImage(img_occitanie, 30*gs, 20*gs, 70*gs, 50*gs)
    ctx.textAlign = "left"
    ctx.fillStyle = "#eeeeee"
    ctx.font = "" + (48*gs) + "px Arial"
    ctx.strokeText("Le tourisme en Occitanie en 2018", 110*gs, 60*gs)
    ctx.fillText("Le tourisme en Occitanie en 2018", 110*gs, 60*gs)
    ctx.strokeStyle = "#111111"

    if (etape_histoire == -1) {
        ctx.font = "" + (40*gs) + "px Arial"
        ctx.strokeText("Débuter l'histoire...", xy_histoire.x*gs, xy_histoire.y*gs)
        ctx.fillText("Débuter l'histoire...", xy_histoire.x*gs, xy_histoire.y*gs)

        ctx.drawImage(img_bouton, xy_histoire.x*gs + ctx.measureText("Débuter l'histoire...").width+15*gs, (xy_histoire.y-35)*gs, 40*gs, 40*gs)
    } else {
        frames[etape_histoire]++

        if (frames[1] > 210) {
            frames[1] = 0
            orig_dpt = Math.floor(94*Math.random())
            dest_dpt = -1
        }

        ctx.font = "" + (40*gs) + "px Arial"
        ctx.strokeText(histoire[etape_histoire].titre, xy_histoire.x*gs, xy_histoire.y*gs)
        ctx.fillText(histoire[etape_histoire].titre, xy_histoire.x*gs, xy_histoire.y*gs)
        ctx.font = "" + (24*gs) + "px Arial"

        mots = histoire[etape_histoire].texte.split(" ")
        ligne = 0
        mot = 0
        texte_to_print = ""
        while (mot < mots.length && mot < 100) {
            texte_to_print_potentiel = texte_to_print + mots[mot] + " "
            if (ctx.measureText(texte_to_print_potentiel).width < 960*gs) {
                texte_to_print = texte_to_print_potentiel
                mot++
            } else {
                ctx.strokeText(texte_to_print, xy_histoire.x*gs, (xy_histoire.y+30*ligne+40)*gs)
                ctx.fillText(texte_to_print, xy_histoire.x*gs, (xy_histoire.y+30*ligne+40)*gs)
                texte_to_print = ""
                ligne++
            }
        }
        ctx.strokeText(texte_to_print, xy_histoire.x*gs, (xy_histoire.y+30*ligne+40)*gs)
        ctx.fillText(texte_to_print, xy_histoire.x*gs, (xy_histoire.y+30*ligne+40)*gs)
        ctx.drawImage(img_bouton, xy_histoire.x*gs, (xy_histoire.y+30*ligne+50)*gs, 40*gs, 40*gs)

        ctx.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
        if (etape_histoire < 6) {
            ctx.strokeText("Suite de l'histoire...", (xy_histoire.x+50)*gs, (xy_histoire.y+30*ligne+50+27)*gs)
            ctx.fillText("Suite de l'histoire...", (xy_histoire.x+50)*gs, (xy_histoire.y+30*ligne+50+27)*gs)
        } else {
            ctx.strokeText("Fin de l'histoire", (xy_histoire.x+50)*gs, (xy_histoire.y+30*ligne+50+27)*gs)
            ctx.fillText("Fin de l'histoire", (xy_histoire.x+50)*gs, (xy_histoire.y+30*ligne+50+27)*gs)
        }
        ctx.globalAlpha = 1
    }

    ctx.textAlign = "left"
    ctx.fillStyle = "#eeeeee"
    ctx.font = "" + (24*gs) + "px Arial"

    if (dest_dpt == -1 && orig_dpt == -1) {
        ctx.strokeText("Nombre total de nuitées en Occitanie " + calendrier_formule[calendrier] + " :", 30*gs, 100*gs)
        ctx.fillText("Nombre total de nuitées en Occitanie " + calendrier_formule[calendrier] + " :", 30*gs, 100*gs)
    } else if (dest_dpt >= 0) {
        ctx.strokeText("Nuitées " + departements[dest_dpt]["formule"] + " " + calendrier_formule[calendrier] + " :", 30*gs, 100*gs)
        ctx.fillText("Nuitées " + departements[dest_dpt]["formule"] + " " + calendrier_formule[calendrier] + " :", 30*gs, 100*gs)
    } else if (orig_dpt == 19) {
        ctx.strokeText("Nuitées en Occitanie de touristes venant de Corse (2A/2B) " + calendrier_formule[calendrier] + " :", 30*gs, 100*gs)
        ctx.fillText("Nuitées en Occitanie de touristes venant de Corse (2A/2B) " + calendrier_formule[calendrier] + " :", 30*gs, 100*gs)
    } else if (orig_dpt >= 0 && orig_dpt != 19) {
        ctx.strokeText("Nuitées en Occitanie de touristes venant " + noms[orig_dpt] + " (" + (1+orig_dpt) + ") " + calendrier_formule[calendrier] + " :", 30*gs, 100*gs)
        ctx.fillText("Nuitées en Occitanie de touristes venant " + noms[orig_dpt] + " (" + (1+orig_dpt) + ") " + calendrier_formule[calendrier] + " :", 30*gs, 100*gs)

        if (etape_histoire ==1) {
            ctx.fillStyle = "#0000ff"
            ctx.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
            ctx.fillText(noms[orig_dpt],30*gs+ctx.measureText("Nuitées en Occitanie de touristes venant ").width, 100*gs)
            ctx.globalAlpha = 1
        }

    }

    ctx.textAlign = "center"
    ctx.strokeStyle = "#eeeeee"
    ctx.fillStyle = "#eeeeee"
    ctx.font = "" + (14*gs) + "px Arial"
    ctx.strokeText("nuitées", graphe["x"]*gs, (graphe["y"]-graphe["h"]*1.15-10)*gs)

    ctx.textAlign = "right"
    if (dest_dpt == -1 && orig_dpt == -1) {
        if (calendrier === "jour") {
            ctx.strokeText("500 000", (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
            ctx.fillText("500 000", (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
        } else if (calendrier === "semaine") {
            ctx.strokeText("3 500 000", (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
            ctx.fillText("3 500 000", (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
        } else if (calendrier === "mois") {
            ctx.strokeText("15 000 000", (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
            ctx.fillText("15 000 000", (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
        }
    } else if (dest_dpt > -1) {
        if (calendrier === "jour") {
            ctx.strokeText(format(""+(departements[dest_dpt]["leg"]/2)), (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
            ctx.fillText(format(""+(departements[dest_dpt]["leg"]/2)), (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
        } else if (calendrier === "semaine") {
            ctx.strokeText(format(""+(7*departements[dest_dpt]["leg"]/2)), (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
            ctx.fillText(format(""+(7*departements[dest_dpt]["leg"]/2)), (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
        } else if (calendrier === "mois") {
            ctx.strokeText(format(""+(30*departements[dest_dpt]["leg"]/2)), (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
            ctx.fillText(format(""+(30*departements[dest_dpt]["leg"]/2)), (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
        }
    } else if (orig_dpt > -1) {
        if (calendrier === "jour") {
            ctx.strokeText(format(""+(legendes[orig_dpt]*2.5)), (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
            ctx.fillText(format(""+(legendes[orig_dpt]*2.5)), (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
        } else if (calendrier === "semaine") {
            ctx.strokeText(format(""+(7*legendes[orig_dpt]*2.5)), (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
            ctx.fillText(format(""+(7*legendes[orig_dpt]*2.5)), (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
        } else if (calendrier === "mois") {
            ctx.strokeText(format(""+(30*legendes[orig_dpt]*2.5)), (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
            ctx.fillText(format(""+(30*legendes[orig_dpt]*2.5)), (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.5+5)*gs)
        }
    }

    if (meteo) {
        ctx.strokeStyle = "#ffa500"
        ctx.strokeText("0", (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.1+5)*gs)
        ctx.strokeText("25", (graphe["x"]-8)*gs, (graphe["y"]-graphe["h"]*0.1-(25/30)*graphe["h"]+5)*gs)
        ctx.textAlign = "center"
        ctx.font = "" + (14*gs) + "px Arial"
        ctx.strokeText("température (°C)", graphe["x"]*gs, (graphe["y"]-graphe["h"]*1.15-26)*gs)
        ctx.strokeStyle = "#ffffff"
    }

    ctx.textAlign = "left"
    ctx.fillStyle = "#eeeeee"
    ctx.font = "" + (24*gs) + "px Arial"

    if (dest_dpt == -1) {
        if (calendrier === "jour") {
            ctx.strokeText("Répartition des touristes sur la région ce jour-là :", 30*gs, (offset_y-10)*gs)
            ctx.fillText("Répartition des touristes sur la région ce jour-là :", 30*gs, (offset_y-10)*gs)
        } else if (calendrier === "semaine") {
            ctx.strokeText("Répartition des touristes sur la région cette semaine-là :", 30*gs, (offset_y-10)*gs)
            ctx.fillText("Répartition des touristes sur la région cette semaine-là :", 30*gs, (offset_y-10)*gs)
        } else if (calendrier === "mois") {
            ctx.strokeText("Répartition des touristes sur la région ce mois-là :", 30*gs, (offset_y-10)*gs)
            ctx.fillText("Répartition des touristes sur la région ce mois-là :", 30*gs, (offset_y-10)*gs)
        }
    }

    ctx.textAlign = "left"
    ctx.font = "" + (24*gs) + "px Arial"

    if (xy_icone_monde.w == 100) {
        if (dest_dpt == -1) {
            ctx.strokeText("Provenance des touristes originaires de l'étranger ayant nuité en Occitanie :", 940*gs, (offset_y-10)*gs)
            ctx.fillText("Provenance des touristes originaires de l'étranger ayant nuité en Occitanie :", 940*gs, (offset_y-10)*gs)
        } else {
            ctx.strokeText("Provenance des touristes originaires de l'étranger ayant nuité "  + departements[dest_dpt].formule + " :", 940*gs, (offset_y-10)*gs)
            ctx.fillText("Provenance des touristes originaires de l'étranger ayant nuité " + departements[dest_dpt].formule + " :", 940*gs, (offset_y-10)*gs)

        }
    } else {
        if (dest_dpt == -1) {
            ctx.strokeText("Provenance des touristes ayant nuité en Occitanie :", 940*gs, (offset_y-10)*gs)
            ctx.fillText("Provenance des touristes ayant nuité en Occitanie :", 940*gs, (offset_y-10)*gs)
        } else {
            ctx.strokeText("Provenance des touristes ayant nuité " + departements[dest_dpt].formule + " :", 940*gs, (offset_y-10)*gs)
            ctx.fillText("Provenance des touristes ayant nuité " + departements[dest_dpt].formule + " :", 940*gs, (offset_y-10)*gs)
        }
    }

    if (xy_icone_monde.w < 100) {
        if ( (xyMouse.x - xy_icone_monde.x*gs)**2 + (xyMouse.y - xy_icone_monde.y*gs)**2 < (xy_icone_monde.w*gs/2)**2) {
            xy_icone_monde.w = Math.min(75, xy_icone_monde.w+2.5)
            xy_icone_monde.h = xy_icone_monde.w
        } else {
            xy_icone_monde.w = Math.max(50, xy_icone_monde.w-2.5)
            xy_icone_monde.h = xy_icone_monde.w
        }
    } else if (xy_icone_france.w < 100) {
        if ( (xyMouse.x - xy_icone_france.x)**2 + (xyMouse.y - xy_icone_france.y)**2 < (xy_icone_france.w/2)**2) {
            xy_icone_france.w = Math.min(75, xy_icone_france.w+2.5)
            xy_icone_france.h = xy_icone_france.w
        } else {
            xy_icone_france.w = Math.max(50, xy_icone_france.w-2.5)
            xy_icone_france.h = xy_icone_france.w
        }
    }

    ctx.drawImage(img_icone_france, (xy_icone_france.x - xy_icone_france.w/2)*gs, (xy_icone_france.y - xy_icone_france.h/2)*gs, xy_icone_france.w*gs, xy_icone_france.h*gs)
    ctx.drawImage(img_icone_monde,  (xy_icone_monde.x  - xy_icone_monde.w/2)*gs,  (xy_icone_monde.y  - xy_icone_monde.h/2)*gs,  xy_icone_monde.w*gs,  xy_icone_monde.h*gs )

    // Affichage de la France entière
    if (xy_icone_france.w == 100) {
        canv = document.createElement('canvas');
        canv.width = 220
        canv.height = 220
        ctx_c = canv.getContext("2d")

        if (dest_dpt == -1 && orig_dpt == -1) {

            for (let i = 0; i < imgs_dep.length; i++) {
                volume = 0
                if (calendrier === "jour") {
                    for (let j = 0; j < departements.length; j++) {
                        vol_dep = departements[j]["volume"][day]
                        volume += vol_dep[i]
                    }
                } else if (calendrier === "semaine") {
                    k = Math.floor(day/7)*7
                    for (let j = 0; j < departements.length; j++) {
                        for (let kk = k; kk < k+7; kk++) {
                            vol_dep = departements[j]["volume"][kk]
                            volume += vol_dep[i]
                        }
                    }
                    volume /= 7
                } else if (calendrier === "mois") {
                    for (let j = 0; j < departements.length; j++) {
                        vol_dep = departements[j]["volume_mois"][mois_annee[day]]
                        volume += vol_dep[i]
                    }
                    volume /= 30
                }
                ctx_c.globalAlpha = volume/20000
                ctx_c.drawImage(imgs_dep[i], 0, 0)
                ctx_c.globalAlpha = 1
            }


        } else if (dest_dpt > -1) {
            if (calendrier === "jour") {
                vol_dep = departements[dest_dpt]["volume"][day]
            } else if (calendrier === "semaine") {
                vol_dep = departements[dest_dpt]["volume"][Math.floor(day/7)]
            } else if (calendrier === "mois") {
                vol_dep = departements[dest_dpt]["volume"][start_mois[mois_annee[day]]]
            }
            for (let i = 0; i < imgs_dep.length; i++) {
                volume = vol_dep[i]
                ctx_c.globalAlpha = volume/2000
                ctx_c.drawImage(imgs_dep[i], 0, 0)
                ctx_c.globalAlpha = 1
            }

            ctx_c.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
            ctx_c.drawImage(departements[dest_dpt]["img_dep"], 0, 0)
            ctx_c.globalAlpha = 1
        } else if (orig_dpt > -1) {
            ctx_c.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
            ctx_c.drawImage(imgs_dep_bleu[orig_dpt], 0, 0)
            ctx_c.globalAlpha = 1
        }
        ctx.drawImage(canv, offset_x_prov*gs, offset_y_prov*gs, w_map*gs, h_map*gs)
        delete canv
        ctx.drawImage(img_france_vierge, offset_x_prov*gs, offset_y_prov*gs, w_map*gs, h_map*gs)

    } else if (xy_icone_monde.w == 100) {
//        ctx.drawImage(img_fr, offset_x_prov+60+100, offset_y_prov+45*0+80)
        ctx.drawImage(img_de, (offset_x_prov+60+100)*gs, (offset_y_prov+48*1+60)*gs,48*gs,36*gs)
        ctx.drawImage(img_it, (offset_x_prov+60+100)*gs, (offset_y_prov+48*2+60)*gs,48*gs,36*gs)
        ctx.drawImage(img_gb, (offset_x_prov+60+100)*gs, (offset_y_prov+48*3+60)*gs,48*gs,36*gs)
        ctx.drawImage(img_nl, (offset_x_prov+60+100)*gs, (offset_y_prov+48*4+60)*gs,48*gs,36*gs)
        ctx.drawImage(img_espt, (offset_x_prov+60+50)*gs, (offset_y_prov+48*5+60)*gs,98*gs,36*gs)
        ctx.drawImage(img_belu, (offset_x_prov+60+50)*gs, (offset_y_prov+48*6+60)*gs,98*gs,36*gs)
        ctx.drawImage(img_dkseno, (offset_x_prov+60)*gs, (offset_y_prov+48*7+60)*gs,148*gs,36*gs)
        ctx.drawImage(img_us, (offset_x_prov+60+100)*gs, (offset_y_prov+48*8+60)*gs,48*gs,36*gs)
        ctx.drawImage(img_ch, (offset_x_prov+60+100)*gs, (offset_y_prov+48*9+60)*gs,48*gs,36*gs)
        ctx.textAlign = "right"
        ctx.strokeText("Autres :", (offset_x_prov+98+100)*gs, (offset_y_prov+48*10+60+26)*gs)
        ctx.fillText("Autres :", (offset_x_prov+98+100)*gs, (offset_y_prov+48*10+60+26)*gs)

        vols_totaux = []
        if (dest_dpt == -1) {
            if (calendrier === "jour") {
                for (let i in mapping_pays) {
                    vol_total = 0
                    for (let j = 0; j < departements.length; j++) {
                        vol_total += departements[j].volume[day][parseInt(i)-1]
                    }
                    vols_totaux.push(vol_total)
                    ctx.beginPath()
                    ctx.moveTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150+vol_total*0.005), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150+vol_total*0.005), (offset_y_prov+48*mapping_pays[i]+60+35)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60+35)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.stroke()
                    ctx.fillStyle = colors_pays[i]
                    ctx.fill()
                    ctx.fillStyle = "#ffffff"
                    ctx.strokeStyle = "#ffffff"
                    ctx.textAlign = "left"
                    ctx.strokeText(format(""+vol_total), (offset_x_prov+65+150+vol_total*0.005+5)*gs, (offset_y_prov+48*mapping_pays[i]+60+24)*gs)
                    ctx.fillText(format(""+vol_total), (offset_x_prov+65+150+vol_total*0.005+5)*gs, (offset_y_prov+48*mapping_pays[i]+60+24)*gs)
                }
            } else if (calendrier === "semaine") {
                for (let i in mapping_pays) {
                    vol_total = 0
                    k = Math.floor(day/7)*7
                    if (k != 364) {
                        for (let j = 0; j < departements.length; j++) {
                            vol_total += departements[j].volume[k][parseInt(i)-1]
                            vol_total += departements[j].volume[k+1][parseInt(i)-1]
                            vol_total += departements[j].volume[k+2][parseInt(i)-1]
                            vol_total += departements[j].volume[k+3][parseInt(i)-1]
                            vol_total += departements[j].volume[k+4][parseInt(i)-1]
                            vol_total += departements[j].volume[k+5][parseInt(i)-1]
                            vol_total += departements[j].volume[k+6][parseInt(i)-1]
                        }
                    } else {
                        for (let j = 0; j < departements.length; j++) {
                            vol_total += departements[j].volume[k][parseInt(i)-1]
                        }
                    }
                    vols_totaux.push(vol_total)
                    ctx.beginPath()
                    ctx.moveTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150+vol_total*0.005/7), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150+vol_total*0.005/7), (offset_y_prov+48*mapping_pays[i]+60+35)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60+35)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.stroke()
                    ctx.fillStyle = colors_pays[i]
                    ctx.fill()
                    ctx.fillStyle = "#ffffff"
                    ctx.strokeStyle = "#ffffff"
                    ctx.textAlign = "left"
                    ctx.strokeText(format(""+vol_total), (offset_x_prov+65+150+vol_total*0.005/7+5)*gs, (offset_y_prov+48*mapping_pays[i]+60+24)*gs)
                    ctx.fillText(format(""+vol_total), (offset_x_prov+65+150+vol_total*0.005/7+5)*gs, (offset_y_prov+48*mapping_pays[i]+60+24)*gs)
                }
            } else if (calendrier === "mois") {
                for (let i in mapping_pays) {
                    vol_total = 0
                    for (let j = 0; j < departements.length; j++) {
                        for (let k = start_mois[mois_annee[day]]; k < start_mois[mois_annee[day]] + nb_jours_mois[mois_annee[day]]; k++) {
                            vol_total += departements[j].volume[k][parseInt(i)-1]
                        }
                    }
                    vols_totaux.push(vol_total)
                    ctx.beginPath()
                    ctx.moveTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150+vol_total*0.005/30), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150+vol_total*0.005/30), (offset_y_prov+48*mapping_pays[i]+60+35)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60+35)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.stroke()
                    ctx.fillStyle = colors_pays[i]
                    ctx.fill()
                    ctx.fillStyle = "#ffffff"
                    ctx.strokeStyle = "#ffffff"
                    ctx.textAlign = "left"
                    ctx.strokeText(format(""+vol_total), (offset_x_prov+65+150+vol_total*0.005/30+5)*gs, (offset_y_prov+48*mapping_pays[i]+60+24)*gs)
                    ctx.fillText(format(""+vol_total), (offset_x_prov+65+150+vol_total*0.005/30+5)*gs, (offset_y_prov+48*mapping_pays[i]+60+24)*gs)
                }
            }
        } else {
            if (calendrier === "jour") {
                for (let i in mapping_pays) {
                    vol_total = departements[dest_dpt].volume[day][parseInt(i)-1]
                    vols_totaux.push(vol_total)
                    ctx.beginPath()
                    ctx.moveTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150+vol_total*0.010), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150+vol_total*0.010), (offset_y_prov+48*mapping_pays[i]+60+35)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60+35)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.stroke()
                    ctx.fillStyle = colors_pays[i]
                    ctx.fill()
                    ctx.fillStyle = "#ffffff"
                    ctx.strokeStyle = "#ffffff"
                    ctx.textAlign = "left"
                    ctx.strokeText(format(""+vol_total), (offset_x_prov+65+150+vol_total*0.010+5)*gs, (offset_y_prov+48*mapping_pays[i]+60+24)*gs)
                    ctx.fillText(format(""+vol_total), (offset_x_prov+65+150+vol_total*0.010+5)*gs, (offset_y_prov+48*mapping_pays[i]+60+24)*gs)
                }
            } else if (calendrier === "semaine") {
                for (let i in mapping_pays) {
                    vol_total = 0
                    k = Math.floor(day/7)*7
                    if (k != 364) {
                        vol_total += departements[dest_dpt].volume[k][parseInt(i)-1]
                        vol_total += departements[dest_dpt].volume[k+1][parseInt(i)-1]
                        vol_total += departements[dest_dpt].volume[k+2][parseInt(i)-1]
                        vol_total += departements[dest_dpt].volume[k+3][parseInt(i)-1]
                        vol_total += departements[dest_dpt].volume[k+4][parseInt(i)-1]
                        vol_total += departements[dest_dpt].volume[k+5][parseInt(i)-1]
                        vol_total += departements[dest_dpt].volume[k+6][parseInt(i)-1]
                    } else {
                        vol_total += departements[dest_dpt].volume[k][parseInt(i)-1]
                    }
                    vols_totaux.push(vol_total)
                    ctx.beginPath()
                    ctx.moveTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150+vol_total*0.010/7), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150+vol_total*0.010/7), (offset_y_prov+48*mapping_pays[i]+60+35)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60+35)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.stroke()
                    ctx.fillStyle = colors_pays[i]
                    ctx.fill()
                    ctx.fillStyle = "#ffffff"
                    ctx.strokeStyle = "#ffffff"
                    ctx.textAlign = "left"
                    ctx.strokeText(format(""+vol_total), (offset_x_prov+65+150+vol_total*0.010/7+5)*gs, (offset_y_prov+48*mapping_pays[i]+60+24)*gs)
                    ctx.fillText(format(""+vol_total), (offset_x_prov+65+150+vol_total*0.010/7+5)*gs, (offset_y_prov+48*mapping_pays[i]+60+24)*gs)

                }
            } else if (calendrier === "mois") {
                for (let i in mapping_pays) {
                    vol_total = 0
                    for (let k = start_mois[mois_annee[day]]; k < start_mois[mois_annee[day]] + nb_jours_mois[mois_annee[day]]; k++) {
                        vol_total += departements[dest_dpt].volume[k][parseInt(i)-1]
                    }
                    vols_totaux.push(vol_total)
                    ctx.beginPath()
                    ctx.moveTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150+vol_total*0.010/30), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150+vol_total*0.010/30), (offset_y_prov+48*mapping_pays[i]+60+35)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60+35)*gs)
                    ctx.lineTo(gs*(offset_x_prov+65+150), (offset_y_prov+48*mapping_pays[i]+60)*gs)
                    ctx.stroke()
                    ctx.fillStyle = colors_pays[i]
                    ctx.fill()
                    ctx.fillStyle = "#ffffff"
                    ctx.strokeStyle = "#ffffff"
                    ctx.textAlign = "left"
                    ctx.strokeText(format(""+vol_total), (offset_x_prov+65+150+vol_total*0.010/30+5)*gs, (offset_y_prov+48*mapping_pays[i]+60+24)*gs)
                    ctx.fillText(format(""+vol_total), (offset_x_prov+65+150+vol_total*0.010/30+5)*gs, (offset_y_prov+48*mapping_pays[i]+60+24)*gs)
                }
            }
        }

        total_total = 0
        for (let i = 0; i < vols_totaux.length; i++) {
            total_total += vols_totaux[i]
        }

        cumul = 0
        for (let i = 0; i < vols_totaux.length; i++) {
            ctx.beginPath()
            ctx.moveTo(camembert.x*gs, camembert.y*gs)
            ctx.lineTo((camembert.x+camembert.r*Math.cos(cumul))*gs, (camembert.y+camembert.r*Math.sin(cumul))*gs)
            ctx.arc(camembert.x*gs, camembert.y*gs, camembert.r*gs, cumul, cumul+2*Math.PI*vols_totaux[i]/total_total)
            ctx.lineTo(camembert.x*gs, camembert.y*gs)
            ctx.stroke()
            ctx.fillStyle = colors_pays_ordered[i]
            ctx.fill()
            cumul += 2*Math.PI*vols_totaux[i]/total_total
        }
    }

    // Ajout chiffres clés

    of = 50

    ctx.beginPath()
    ctx.moveTo(gs*(offset_x_prov + w_map + 40), (offset_y_prov+of)*gs)
    ctx.lineTo(gs*(offset_x_prov + w_map + 40), (offset_y_prov+h_map-250-of)*gs)
    ctx.lineTo(gs*(offset_x_prov + w_map + 340), (offset_y_prov+h_map-250-of)*gs)
    ctx.lineTo(gs*(offset_x_prov + w_map + 340), (offset_y_prov+of)*gs)
    ctx.lineTo(gs*(offset_x_prov + w_map + 40), (offset_y_prov+of)*gs)
    ctx.strokeStyle = "#222222"
    ctx.stroke()
    ctx.fillStyle = "#444444"
    ctx.fill()

    ctx.strokeStyle = "#ffffff"
    ctx.fillStyle = "#eeeeee"
    ctx.textAlign = "center"
    ctx.font = "" + (22*gs) + "px Arial"

    ctx.strokeText("Le tourisme en 2018 en", (offset_x_prov + w_map + 40 +150)*gs, (offset_y_prov+38*1+of)*gs)
    ctx.fillText("Le tourisme en 2018 en", (offset_x_prov + w_map + 40 +150)*gs, (offset_y_prov+38*1+of)*gs)
//    ctx.fillText("L'année 2018 en", offset_x_prov + w_map + 40 + 150, offset_y_prov+40*1+of)

    ctx.strokeText("quelques chiffres clé :", (offset_x_prov + w_map + 40 + 150)*gs, (offset_y_prov+38*2-10+of)*gs)
    ctx.fillText("quelques chiffres clé :", (offset_x_prov + w_map + 40 + 150)*gs, (offset_y_prov+38*2-10+of)*gs)

    ctx.textAlign = "left"
    ctx.font = "" + (18*gs) + "px Arial"
    ctx.strokeText("− 200 millions de nuitées", (offset_x_prov + w_map + 40 + 20)*gs, (offset_y_prov+38*3+of)*gs)
    ctx.fillText("− 200 millions de nuitées", (offset_x_prov + w_map + 40 + 20)*gs, (offset_y_prov+38*3+of)*gs)

    ctx.strokeText("− 41% de touristes étrangers", (offset_x_prov + w_map + 40 + 20)*gs, (offset_y_prov+38*4+of)*gs)
    ctx.fillText("− 41% de touristes étrangers", (offset_x_prov + w_map + 40 + 20)*gs, (offset_y_prov+38*4+of)*gs)

    ctx.strokeText("− 35% des nuitées en juillet-août", (offset_x_prov + w_map + 40 + 20)*gs, (offset_y_prov+38*5+of)*gs)
    ctx.fillText("− 35% des nuitées en juillet-août", (offset_x_prov + w_map + 40 + 20)*gs, (offset_y_prov+38*5+of)*gs)

    ctx.strokeText("− 202 événements", (offset_x_prov + w_map + 40 + 20)*gs, (offset_y_prov+38*6+of)*gs)
    ctx.fillText("− 202 événements", (offset_x_prov + w_map + 40 + 20)*gs, (offset_y_prov+38*6+of)*gs)


//    ctx.strokeText(xyMouse.x, 100, 20)
//    ctx.strokeText(xyMouse.y, 100, 40)

    if ( (xyMouse.x - xy_icone_event.x*gs)**2 + (xyMouse.y - xy_icone_event.y*gs)**2 < (xy_icone_event.w*gs/2)**2) {
        ctx.strokeStyle = "#ffffff"
        ctx.fillStyle = "#eeeeee"
        ctx.textAlign = "center"
        ctx.font = "" + (14*gs) + "px Arial"
        if (event_on) {
            ctx.strokeText("Ne plus afficher les événements", xy_icone_event.x*gs, (xy_icone_event.y-20)*gs)
            ctx.fillText("Ne plus afficher les événements", xy_icone_event.x*gs, (xy_icone_event.y-20)*gs)
        } else {
            ctx.strokeText("Afficher les événements", xy_icone_event.x*gs, (xy_icone_event.y-20)*gs)
            ctx.fillText("Afficher les événements", xy_icone_event.x*gs, (xy_icone_event.y-20)*gs)
        }
    } else if ( (xyMouse.x - xy_icone_meteo.x*gs)**2 + (xyMouse.y - xy_icone_meteo.y*gs)**2 < (xy_icone_meteo.w*gs/2)**2) {
        ctx.strokeStyle = "#ffffff"
        ctx.fillStyle = "#eeeeee"
        ctx.textAlign = "center"
        ctx.font = "" + (14*gs) + "px Arial"
        if (meteo) {
            ctx.strokeText("Ne pas afficher les températures", xy_icone_meteo.x*gs, (xy_icone_meteo.y+30)*gs)
            ctx.fillText("Ne pas afficher les températures", xy_icone_meteo.x*gs, (xy_icone_meteo.y+30)*gs)
        } else {
            ctx.fillText("Afficher les températures", xy_icone_meteo.x*gs, (xy_icone_meteo.y+30)*gs)
        }
    } else if ( (xyMouse.x - xy_icone_event.x*gs)**2 + (xyMouse.y - xy_icone_event.y*gs)**2 < (xy_icone_event.w*gs/2)**2) {

    } else if ( (xyMouse.x - (xy_icone_meteo.x + 1.25*xy_icone_meteo.w)*gs)**2 + (xyMouse.y - xy_icone_meteo.y*gs)**2 < (xy_icone_meteo.w*gs/2)**2) {
        ctx.strokeStyle = "#ffffff"
        ctx.fillStyle = "#eeeeee"
        ctx.textAlign = "center"
        ctx.font = "" + (14*gs) + "px Arial"
        ctx.strokeText("Afficher par mois", (xy_icone_meteo.x - 1.25*xy_icone_meteo.w)*gs, (xy_icone_meteo.y+30)*gs)
        ctx.fillText("Afficher par mois", (xy_icone_meteo.x - 1.25*xy_icone_meteo.w)*gs, (xy_icone_meteo.y+30)*gs)
    } else if ( (xyMouse.x - (xy_icone_meteo.x + 2.50*xy_icone_meteo.w)*gs)**2 + (xyMouse.y - xy_icone_meteo.y*gs)**2 < (xy_icone_meteo.w*gs/2)**2) {
        ctx.strokeStyle = "#ffffff"
        ctx.fillStyle = "#eeeeee"
        ctx.textAlign = "center"
        ctx.font = "" + (14*gs) + "px Arial"
        ctx.strokeText("Afficher par semaine", (xy_icone_meteo.x - 2.50*xy_icone_meteo.w)*gs, (xy_icone_meteo.y+30)*gs)
        ctx.fillText("Afficher par semaine", (xy_icone_meteo.x - 2.50*xy_icone_meteo.w)*gs, (xy_icone_meteo.y+30)*gs)
    } else if ( (xyMouse.x - (xy_icone_meteo.x + 3.75*xy_icone_meteo.w)*gs)**2 + (xyMouse.y - xy_icone_meteo.y*gs)**2 < (xy_icone_meteo.w*gs/2)**2) {
        ctx.strokeStyle = "#ffffff"
        ctx.fillStyle = "#eeeeee"
        ctx.textAlign = "center"
        ctx.font = "" + (14*gs) + "px Arial"
        ctx.strokeText("Afficher par jour", (xy_icone_meteo.x - 3.75*xy_icone_meteo.w)*gs, (xy_icone_meteo.y+30)*gs)
        ctx.fillText("Afficher par jour", (xy_icone_meteo.x - 3.75*xy_icone_meteo.w)*gs, (xy_icone_meteo.y+30)*gs)
    } else if ( (xyMouse.x - (xy_icone_meteo.x - 16.25*xy_icone_meteo.w)*gs)**2 + (xyMouse.y - xy_icone_meteo.y*gs)**2 < (xy_icone_meteo.w*gs/2)**2) {
        ctx.strokeStyle = "#ffffff"
        ctx.fillStyle = "#eeeeee"
        ctx.textAlign = "center"
        ctx.font = "" + (14*gs) + "px Arial"
        if (auto_scroll) {
            ctx.strokeText("Arrêter le défilement automatique", (xy_icone_meteo.x + 16.25*xy_icone_meteo.w)*gs, (xy_icone_meteo.y+30)*gs)
            ctx.fillText("Arrêter le défilement automatique", (xy_icone_meteo.x + 16.25*xy_icone_meteo.w)*gs, (xy_icone_meteo.y+30)*gs)
        } else {
            ctx.strokeText("Activer le défilement automatique", (xy_icone_meteo.x + 16.25*xy_icone_meteo.w)*gs, (xy_icone_meteo.y+30)*gs)
            ctx.fillText("Activer le défilement automatique", (xy_icone_meteo.x + 16.25*xy_icone_meteo.w)*gs, (xy_icone_meteo.y+30)*gs)
        }
    }

    if (etape_histoire == 0 && auto_scroll && (xyMouse.x - xy_icone_meteo.x*gs - 16.25*xy_icone_meteo.w*gs)**2 + (xyMouse.y - xy_icone_meteo.y*gs)**2 >= (xy_icone_meteo.w*gs/2)**2) {
        ctx.strokeStyle = "#ffffff"
        ctx.fillStyle = "#eeeeee"
        ctx.textAlign = "center"
        ctx.font = "" + (14*gs) + "px Arial"
        ctx.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
        ctx.strokeText("Cliquer ici pour arrêter le défilement automatique", (xy_icone_meteo.x + 16.25*xy_icone_meteo.w)*gs, (xy_icone_meteo.y+30)*gs)
        ctx.fillText("Cliquer ici pour arrêter le défilement automatique", (xy_icone_meteo.x + 16.25*xy_icone_meteo.w)*gs, (xy_icone_meteo.y+30)*gs)
        ctx.globalAlpha = 1
    } else if (etape_histoire == 1) {
        if (xy_icone_monde.w < 100 && !(xyMouse.x >= offset_x_prov*gs && xyMouse.x <= (offset_x_prov+w_map)*gs && xyMouse.y >= offset_y_prov*gs && xyMouse.y <= (offset_y_prov+h_map)*gs)) {
            ctx.strokeStyle = "#ffffff"
            ctx.fillStyle = "#eeeeee"
            ctx.textAlign = "center"
            ctx.font = "" + (15*gs) + "px Arial"
            ctx.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
            ctx.strokeText("Cliquer sur un département pour voir la répartition des touristes qui en sont originaires", (offset_x_prov+w_map/2)*gs, (offset_y_prov+h_map/2)*gs)
            ctx.fillText("Cliquer sur un département pour voir la répartition des touristes qui en sont originaires", (offset_x_prov+w_map/2)*gs, (offset_y_prov+h_map/2)*gs)
            ctx.globalAlpha = 1
        }
        if (!auto_scroll && !day_fixe && !(xyMouse.x >= graphe.x*gs && xyMouse.x <= (graphe.x + graphe.w)*gs && xyMouse.y >= (graphe.y - graphe.h)*gs && xyMouse.y <= graphe.y*gs)) {
            ctx.strokeStyle = "#ffffff"
            ctx.fillStyle = "#eeeeee"
            ctx.textAlign = "center"
            ctx.font = "" + (15*gs) + "px Arial"
            ctx.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
            ctx.strokeText("Passer le curseur sur une date pour voir le nombre de nuitées à cette date", (graphe.x+graphe.w/2)*gs, (graphe.y-graphe.h+10)*gs)
            ctx.fillText("Passer le curseur sur une date pour voir le nombre de nuitées à cette date", (graphe.x+graphe.w/2)*gs, (graphe.y-graphe.h+10)*gs)
            ctx.globalAlpha = 1
        }
    } else if (etape_histoire == 2) {
        if (!(xyMouse.x >= offset_x*gs && xyMouse.x <= (offset_x+img_vierge.width*scale)*gs && xyMouse.y >= offset_y*gs && xyMouse.y <= (offset_y+img_vierge.height*scale)*gs)) {
            ctx.strokeStyle = "#ffffff"
            ctx.fillStyle = "#eeeeee"
            ctx.textAlign = "center"
            ctx.font = "" + (18*gs) + "px Arial"
            ctx.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
            ctx.strokeText("Cliquer sur un département pour voir la provenance des touristes", (offset_x+img_vierge.width*scale/2)*gs, (offset_y+15)*gs)
            ctx.fillText("Cliquer sur un département pour voir la provenance des touristes", (offset_x+img_vierge.width*scale/2)*gs, (offset_y+15)*gs)
            ctx.globalAlpha = 1
        }
    } else if (etape_histoire == 3) {
        if (dest_dpt == 8 && !(xyMouse.x >= offset_x*gs && xyMouse.x <= (offset_x+img_vierge.width*scale)*gs && xyMouse.y >= offset_y*gs && xyMouse.y <= (offset_y+img_vierge.height*scale)*gs)) {
            ctx.strokeStyle = "#ffffff"
            ctx.fillStyle = "#eeeeee"
            ctx.textAlign = "center"
            ctx.font = "" + (18*gs) + "px Arial"
            ctx.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
            ctx.strokeText("Cliquer sur l'Hérault pour comparer", (offset_x+img_vierge.width*scale*departements[6].x)*gs, (offset_y+img_vierge.height*scale*departements[6].y-25)*gs)
            ctx.fillText("Cliquer sur l'Hérault pour comparer", (offset_x+img_vierge.width*scale*departements[6].x)*gs, (offset_y+img_vierge.height*scale*departements[6].y-25)*gs)
            ctx.globalAlpha = 1
        }
    } else if (etape_histoire == 4) {
        if (!(xyMouse.x >= offset_x*gs && xyMouse.x <= (offset_x+img_vierge.width*scale)*gs && xyMouse.y >= offset_y*gs && xyMouse.y <= (offset_y+img_vierge.height*scale)*gs)) {
            ctx.strokeStyle = "#ffffff"
            ctx.fillStyle = "#eeeeee"
            ctx.textAlign = "center"
            ctx.font = "" + (18*gs) + "px Arial"
            ctx.globalAlpha = 0.25+0.75*Math.abs(time%1000-500)/500
            if (calendrier === "mois") {
                ctx.strokeText("Le nombre d'événements au fil des mois est indiqué pour pour chaque département", (offset_x+img_vierge.width*scale/2)*gs, (offset_y+15)*gs)
                ctx.fillText("Le nombre d'événements au fil des mois est indiqué pour pour chaque département", (offset_x+img_vierge.width*scale/2)*gs, (offset_y+15)*gs)
            }
            ctx.globalAlpha = 1
        }
    }


    handle_click()

    xyClick = {"x": -1, "y": -1}
}

function compute_volumes_mois() {
    for (let j = 0; j < departements.length; j++) {
        departements[j]["volume_mois"] = []
        for (let m = 0; m < 12; m++) {
            departements[j]["volume_mois"].push([])
            for (let l = 0; l < 109; l++) {
                vol_mois = 0
                for (let k = start_mois[m]; k < start_mois[m] + nb_jours_mois[m]; k++) {
                    vol_mois += departements[j]["volume"][k][l]
                }
                departements[j]["volume_mois"][m].push(vol_mois)
            }
        }
    }
}

function lissage_donnees() {

    // Problème des données manquantes à day 240 et day 336
    for (let i = 0; i < departements.length; i++) {
        departements[i]["temp"][240] = Math.floor((departements[i]["temp"][239] + departements[i]["temp"][241])/2)
        departements[i]["temp"][336] = Math.floor((departements[i]["temp"][335] + departements[i]["temp"][337])/2)
        departements[i]["nuitees"][240] = Math.floor((departements[i]["nuitees"][239] + departements[i]["nuitees"][241])/2)
        departements[i]["nuitees"][336] = Math.floor((departements[i]["nuitees"][335] + departements[i]["nuitees"][337])/2)
        total[240] = Math.floor((total[239]+total[241])/2)
        total[336] = Math.floor((total[335]+total[337])/2)
        temp_moyenne[240] = Math.floor((temp_moyenne[239]+temp_moyenne[241])/2)
        temp_moyenne[336] = Math.floor((temp_moyenne[335]+temp_moyenne[337])/2)
    }

    for (let i = 0; i < departements.length; i++) {
        departements[i]["temp_lissees"] = JSON.parse(JSON.stringify(departements[i]["temp"]))
        departements[i]["nuitees_lissees"] = JSON.parse(JSON.stringify(departements[i]["nuitees"]))

        for (let j = 1; j < 364; j++) {
            departements[i]["temp_lissees"][j] = (departements[i]["temp"][j-1] + departements[i]["temp"][j+1])/2
            departements[i]["nuitees_lissees"][j] = (departements[i]["nuitees"][j-1] + departements[i]["nuitees"][j+1])/2
        }
    }
}


function max(L) {
    m = 0
    for (let i = 0; i < L.length; i++) {
        m = Math.max(m, L[i])
    }
    return m
}

function format(nb_nuitees) {
    if (nb_nuitees.length == 8) {
       nb_nuitees = nb_nuitees[0] + nb_nuitees[1] + " " + nb_nuitees[2] + nb_nuitees[3] + nb_nuitees[4] + " " + nb_nuitees[5] + nb_nuitees[6] + nb_nuitees[7]
    } else if (nb_nuitees.length == 7) {
       nb_nuitees = nb_nuitees[0] + " " + nb_nuitees[1] + nb_nuitees[2] + nb_nuitees[3] + " " + nb_nuitees[4] + nb_nuitees[5] + nb_nuitees[6]
    } else if (nb_nuitees.length == 6) {
       nb_nuitees = nb_nuitees[0] + nb_nuitees[1] + nb_nuitees[2] + " " + nb_nuitees[3] + nb_nuitees[4] + nb_nuitees[5]
    } else if (nb_nuitees.length == 5) {
       nb_nuitees = nb_nuitees[0] + nb_nuitees[1] + " " + nb_nuitees[2] + nb_nuitees[3] + nb_nuitees[4]
    } else if (nb_nuitees.length == 4) {
       nb_nuitees = nb_nuitees[0] + " " + nb_nuitees[1] + nb_nuitees[2] + nb_nuitees[3]
    }
    return nb_nuitees
}


function handle_click() {
    if (xyClick.x >= xy_histoire.x*gs && xyClick.y >= (xy_histoire.y-35)*gs && xyClick.y <= (xy_histoire.y-35+40)*gs) {
        etape_histoire = 0
        auto_scroll = true
        day_fixe = false
        calendrier = "mois"
        day = 0
    } else if (xyClick.x >= xy_histoire.x*gs && xyClick.x <= (xy_histoire.x + 40)*gs && xyClick.y >= (xy_histoire.y+30*ligne+50)*gs && xyClick.y <= (xy_histoire.y+30*ligne+50+40)*gs) {
        etape_histoire += 1
        if (etape_histoire == 1) {
            day_fixe = false
            auto_scroll = false
            calendrier = "jour"
            dest_dpt = -1
        } else if (etape_histoire == 2) {
            meteo = true
            calendrier = "semaine"
            auto_scroll = true
            dest_dpt = 6
            orig_dpt = -1
        } else if (etape_histoire == 3) {
            meteo = false
            calendrier = "mois"
            auto_scroll = true
            dest_dpt = 8
            orig_dpt = -1
        } else if (etape_histoire == 4) {
            event_on = true
            auto_scroll = true
            calendrier = "mois"
            dest_dpt = -1
            orig_dpt = -1
        } else if (etape_histoire == 5) {
            event_on = true
            auto_scroll = true
            calendrier = "semaine"
            xy_icone_monde.w = 100
            xy_icone_monde.h = 100
            xy_icone_france.w = 50
            xy_icone_france.h = 50
            orig_dpt = -1
        } else if (etape_histoire == 6) {
            xy_icone_monde.w = 50
            xy_icone_monde.h = 50
            xy_icone_france.w = 100
            xy_icone_france.h = 100
            auto_scroll = true
            calendrier = "semaine"
            meteo = true
            dest_dpt = -1
            orig_dpt = -1
            event_on = true
        } else if (etape_histoire == 7) {
            day_fixe = false
            auto_scroll = false
            meteo = false
            event_on = false
            etape_histoire = -1
        }
    } else if (xyClick.x >= graphe["x"]*gs && xyClick.x < (graphe["x"] + graphe["w"])*gs && xyClick.y < graphe["y"]*gs && xyClick.y > (graphe["y"] - graphe["h"]*1.5)*gs) {
        day_fixe = !day_fixe
    } else if ( (xyClick.x - xy_icone_event.x*gs)**2 + (xyClick.y - xy_icone_event.y*gs)**2 < (xy_icone_event.w*gs/2)**2) {
        event_on = !event_on
    } else if ( (xyClick.x - xy_icone_meteo.x*gs)**2 + (xyClick.y - xy_icone_meteo.y*gs)**2 < (xy_icone_meteo.w*gs/2)**2) {
        meteo = !meteo
    } else if ( (xyClick.x - xy_icone_meteo.x*gs + 1.25*gs*xy_icone_meteo.w)**2 + (xyClick.y - xy_icone_meteo.y*gs)**2 < (xy_icone_meteo.w*gs/2)**2) {
        calendrier = "mois"
    } else if ( (xyClick.x - xy_icone_meteo.x*gs + 2.50*gs*xy_icone_meteo.w)**2 + (xyClick.y - xy_icone_meteo.y*gs)**2 < (xy_icone_meteo.w*gs/2)**2) {
        calendrier = "semaine"
    } else if ( (xyClick.x - xy_icone_meteo.x*gs + 3.75*gs*xy_icone_meteo.w)**2 + (xyClick.y - xy_icone_meteo.y*gs)**2 < (xy_icone_meteo.w*gs/2)**2) {
        calendrier = "jour"
    } else if ( (xyClick.x - xy_icone_meteo.x*gs - 16.25*gs*xy_icone_meteo.w)**2 + (xyClick.y - xy_icone_meteo.y*gs)**2 < (xy_icone_meteo.w*gs/2)**2) {
        auto_scroll = !auto_scroll
    } else {
        if (xy_icone_monde.w < 100 && (xyClick.x - xy_icone_monde.x*gs)**2 + (xyClick.y - xy_icone_monde.y*gs)**2 < (xy_icone_monde.w*gs/2)**2) {
            xy_icone_monde.w = 100
            xy_icone_monde.h = 100
            xy_icone_france.w = 50
            xy_icone_france.h = 50
        } else if (xy_icone_france.w < 100 && (xyClick.x - xy_icone_france.x*gs)**2 + (xyClick.y - xy_icone_france*gs.y)**2 < (xy_icone_france.w*gs/2)**2) {
            xy_icone_monde.w = 50
            xy_icone_monde.h = 50
            xy_icone_france.w = 100
            xy_icone_france.h = 100
        } else if (xyClick.x > -1) {
            new_dest_dpt = -1
            new_orig_dpt = -1

            // Clic sur un département de la carte Occitanie
            x_test = Math.round((xyClick.x - offset_x*gs)/(scale*gs))
            y_test = Math.round((xyClick.y - offset_y*gs)/(scale*gs))
            if (y_test >= 0 && y_test < 783 && x_test >= 0 && x_test < 1066) {
                for (let i = 0; i < pixels.length; i++) {
                    if (pixels[i][y_test].indexOf(x_test) > -1) {
                        new_dest_dpt = i
                    }
                }
            }

            if (xy_icone_france.w == 100) {
                // Clic sur un département de la carte France
                x_test = Math.round((xyClick.x - offset_x_prov*gs)*220/(w_map*gs))
                y_test = Math.round((xyClick.y - offset_y_prov*gs)*220/(h_map*gs))
                if (y_test >= 0 && y_test < 1100 && x_test >= 0 && x_test < 1100) {
                    for (let i = 0; i < pixels_all.length; i++) {
                        if (pixels_all[i][y_test].indexOf(x_test) > -1) {
                            new_orig_dpt = i
                            frames[1] = 0
                        }
                    }
                }
            }

            if (new_dest_dpt == dest_dpt) {
                dest_dpt = -1
            } else if (new_dest_dpt > -1) {
                dest_dpt = new_dest_dpt
                orig_dpt = -1
            }
            if (new_orig_dpt == orig_dpt) {
                orig_dpt = -1
                frames[1] = 0
            } else if (new_orig_dpt > -1) {
                orig_dpt = new_orig_dpt
                dest_dpt = -1
            }
        }
    }
}
