<template>
<div class="container-fluid m-0 p-0">
    <div class="preloader" id="preloader">
        <img src="~/static/img/preloader.svg" alt="" width="64" height="64">
    </div>
    <Menu></Menu>
    <!-- NAVIGATION -->
    <nav class="main-nav">
        <ul>
            <li v-b-tooltip.hover title="Inicio">
                <a href="/">
                    <span></span>
                </a>
            </li>
            <li v-b-tooltip.hover title="Videos">
                <a href="/videos">
                    <span></span>
                </a>
            </li>
            <li v-b-tooltip.hover title="Sistemas de Seguridad">
                <a href="/sistemas-de-seguridad">
                    <span></span>
                </a>
            </li>
            <li v-b-tooltip.hover title="Tipos de Sistemas de Seguridad">
                <a href="/tipos-de-sistemas-de-seguridad">
                    <span></span>
                </a>
            </li>
            <li v-b-tooltip.hover title="Nuestro Compromiso">
                <a href="/nuestro-compromiso">
                    <span></span>
                </a>
            </li>
            <li v-b-tooltip.hover title="Estándares de Seguridad">
                <a href="/estandares-de-seguridad">
                    <span></span>
                </a>
            </li>
            <li v-b-tooltip.hover title="Preguntas Frecuentes">
                <a href="/preguntas-frecuentes" class="preguntas-frecuentes">
                    <span></span>
                </a>
            </li>
            <li v-b-tooltip.hover title="Postventa">
                <a href="/postventa">
                    <span></span>
                </a>
            </li>
        </ul>
    </nav>

    <!-- END NAVIGATION -->
    <!--SECTIONS-->
    <section class="row container-fluid m-0 p-0" id="home">
        <div class="col-md-12 m-0 p-0 relative">
            <no-ssr>

                <carousel class="carousel" :autoplay="true" :nav="false" :items="1" :loop="true" :autoplayTimeout="6000" :autoplaySpeed="1500">
                    <div class="item slide1">
                        <div class="content">
                            <div class="info">
                                <div class="title">
                                    <img src="~/static/img/peores-conductores.svg" alt>
                                </div>
                                <div class="legend d-md-none d-lg-none d-xl-none">
                                    <img src="~/static/img/slide1-txt-mobile.svg" alt>
                                </div>
                                <h1 class="d-none d-md-block"><img src="~/static/img/slide1-txt.svg" alt></h1>
                                <div class="btn-line">
                                    <div class="relative">
                                        <a class="btn md-trigger" data-modal="modal-9" href="hGjNcnbQdmg">
                                            <img src="~/static/img/play.svg" alt>
                                        </a>
                                        <div class="line">
                                            <img src="~/static/img/line.png" alt>
                                        </div>
                                    </div>
                                </div> 
                                <div class="conoce-mas">
                                    <div class="relative">
                                        <img src="~/static/img/conoce-mas.svg" alt>
                                        <nuxt-link @click.native="conoceMas()" to="/tipos-de-sistemas-de-seguridad/" class="aqui">
                                            <img src="~/static/img/aqui.svg" class="svg" alt>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="~/static/img/slide-peores-conductores.jpg" alt="LOS PEORES CONDUCTORES" class="d-none d-md-block">
                        <img src="~/static/img/slide1-mobile.jpg" alt="LOS PEORES CONDUCTORES" class="d-md-none d-lg-none d-xl-none">
                    </div>

                    <div class="item slide2">
                        <div class="content">
                            <div class="info">
                                <div class="title">
                                    <img src="~/static/img/slide2-txt.svg" class="d-none d-md-block" alt>
                                    <img src="~/static/img/slide2-txt-mobile.svg" class="d-md-none d-lg-none d-xl-none" alt>
                                </div>
                                <div class="description">
                                    <img src="~/static/img/slide2-txt2.svg" class="d-none d-md-block" alt>
                                    <img src="~/static/img/slide2-txt2-mobile.svg" class="d-md-none d-lg-none d-xl-none" alt>
                                </div>
                                <a href="#" @click.prevent="homeSistemas()" class="btn-vermas"><img src="~/static/img/vermas-slide.svg" alt="Ver más"></a>
                            </div>
                        </div>
                        <img src="~/static/img/slide-2.jpg" alt="CUIDAMOS LO MÁS VALIOSO DE TU VIDA" class="d-none d-md-block">
                        <img src="~/static/img/slide2-mobile.jpg" alt="CUIDAMOS LO MÁS VALIOSO DE TU VIDA" class="d-md-none d-lg-none d-xl-none">
                    </div>

                    <div class="item slide2">
                        <div class="content">
                            <div class="info">
                                <div class="title">
                                    <img src="~/static/img/slide2-txt.svg" class="d-none d-md-block" alt>
                                    <img src="~/static/img/slide2-txt-mobile.svg" class="d-md-none d-lg-none d-xl-none" alt>
                                </div>
                                <div class="description">
                                    <img src="~/static/img/slide2-txt2.svg" class="d-none d-md-block" alt>
                                    <img src="~/static/img/slide2-txt2-mobile.svg" class="d-md-none d-lg-none d-xl-none" alt>
                                </div>
                                <a href="#" @click.prevent="homeCompromiso()" class="btn-vermas"><img src="~/static/img/vermas-slide.svg" alt="Ver más"></a>
                            </div>
                        </div>
                        <img src="~/static/img/slide-3.jpg" alt="CUIDAMOS LO MÁS VALIOSO DE TU VIDA" class="d-none d-md-block">
                        <img src="~/static/img/slide3-mobile.jpg" alt="CUIDAMOS LO MÁS VALIOSO DE TU VIDA" class="d-md-none d-lg-none d-xl-none">
                    </div>

                    <div class="item slide2">
                        <div class="content">
                            <div class="info">
                                <div class="title">
                                    <img src="~/static/img/slide2-txt.svg" class="d-none d-md-block" alt>
                                    <img src="~/static/img/slide2-txt-mobile.svg" class="d-md-none d-lg-none d-xl-none" alt>
                                </div>
                                <div class="description">
                                    <img src="~/static/img/slide2-txt2.svg" class="d-none d-md-block" alt>
                                    <img src="~/static/img/slide2-txt2-mobile.svg" class="d-md-none d-lg-none d-xl-none" alt>
                                </div>
                                <a href="#" @click.prevent="homeEstandares()" class="btn-vermas"><img src="~/static/img/vermas-slide.svg" alt="Ver más"></a>
                            </div>
                        </div>
                        <img src="~/static/img/slide4.jpg" alt="CUIDAMOS LO MÁS VALIOSO DE TU VIDA" class="d-none d-md-block">
                        <img src="~/static/img/slide4-mobile.jpg" alt="CUIDAMOS LO MÁS VALIOSO DE TU VIDA" class="d-md-none d-lg-none d-xl-none">
                    </div>
                </carousel>
                <nuxt-link @click.native="homeVideos()" to="/videos" class="arrow-down">
                    <img src="~/static/img/arrow-down.svg" alt>
                </nuxt-link>
                <div class="line-vert">
                    <img src="~/static/img/linevert.png">
                </div>

            </no-ssr>
        </div>
    </section>

    <section id="videos" class="container-fluid">
        <div class="content">
            <b-row class="m-0 p-0">
                <b-col cols="12 m-0 p-0">
                    <h3>
                        <em>{{ this.video.capitulo }}</em>
                    </h3>
                 </b-col>
            </b-row>
            <b-row class="m-0 p-0">
                <b-col class="left m-0 pl-0 pr-4" sm="12" md="6" id="datavideo">
                    <h4>{{ this.video.title }}</h4>
                    <p>{{ this.video.description }}</p>
                    <p class="sistema" v-html="this.video.system"></p>
                    <b-row>
                        <b-col>
                            <p class="resaltado border-right" v-html="this.video.quote"></p>
                        </b-col>
                        <b-col>
                            <nuxt-link @click.native="conoceSistema('ba', false)" to="/tipos-de-sistemas-de-seguridad/seguridad-de-prevencion/asistencia-de-frenado/abs" class="aqui">
                                <img src="~/static/img/aqui-video.svg" alt>
                            </nuxt-link>
                        </b-col>
                    </b-row>
                    <b-row class="descubre-toyota" @click.prevent="conoceSistema('ba', true)">
                        <div class="btn border-right">
                            <img src="~/static/img/play2.svg" alt class="play">
                        </div>
                        <div class="txt">
                            <p>Descubre que toyota<br>tiene este sistema</p>
                        </div>
                    </b-row>
                </b-col>
                <b-col class="right" sm="12" md="6">
                    <div class="video">
                        <img :src="this.video.img" alt class="img">
                        <a :href="this.video.idvideo" class="play" data-modal="modal-9">
                            <!-- tilter tilter--1 md-trigger <figcaption class="tilter__caption">
                                <span>ver capítulo</span>
                                <img src="~/static/img/btnplay.svg" alt="" class="btn">
                            </figcaption> -->
                            <span class="prox">PRÓXIMAMENTE</span>
                            <img class="tilter__deco tilter__deco--lines" src="~/static/img/rectangle.svg" alt>
                        </a>
                    </div>
                    <!-- <div class="share">
                        <ul>
                            <li>Compartir</li>
                            <li>
                                <a
                                    href="#"
                                    @click.prevent="fbs_click(400, 300)"
                                    target="_blank"
                                    title="Compartir en Facebook"
                                    class="fb"
                                ><img src="~/static/img/fb.svg" alt></a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    @click.prevent="tws_click(400, 550)"
                                    class="tw"
                                    target="_blank"
                                    title="Compartir en Twitter"
                                >
                                    <img src="~/static/img/tw.svg" alt>
                                </a>
                            </li>
                        </ul>
                    </div> -->
                </b-col>
            </b-row>
            <div class="separator"></div>
            <b-row class="m-0 p-0 video-thumbs">
                <b-col class="p-0 item next" sm="6" md="2">
                    <a href="#">
                        <img src="~/static/img/foto-video1.jpg" class="img" alt>
                        <!-- <img src="~/static/img/plus.svg" alt class="plus"> -->
                        <img src="~/static/img/locker.svg" alt class="lock">
                        <span class="min-cover"></span>
                        <p class="datos">
                            <span class="nombre">ÓSCAR</span>
                            <span class="sistema">Sistema BA</span>
                        </p>
                        <div class="cover"></div>
                        <div class="txt">
                        Capítulo<br>
                        disponible<br>
                        el 8 de Febrero</div>
                    </a>
                </b-col>
                <b-col class="p-0 item next" sm="6" md="2">
                    <a href="#">
                        <img src="~/static/img/foto-video6.jpg" alt class="img">
                        <img src="~/static/img/locker.svg" alt class="lock">
                        <p class="datos">
                            <span class="nombre">VERÓNICA</span>
                            <span class="sistema">Sistema VSC</span>
                        </p>
                        <div class="cover"></div>
                        <div class="txt">
                        Capítulo<br>
                        disponible<br>
                        el 15 de Febrero</div>
                    </a>
                </b-col>
                
                <b-col class="p-0 item next" sm="6" md="2">
                    <a href="#">
                        <img src="~/static/img/foto-video2.jpg" alt class="img">
                        <img src="~/static/img/locker.svg" alt class="lock">
                        <p class="datos">
                            <span class="nombre">MARTA</span>
                            <span class="sistema">Sistema CRAWL</span>
                        </p>
                        <div class="cover"></div>
                        <div class="txt">
                        Capítulo<br>
                        disponible<br>
                        el 22 de Febrero</div>
                    </a>
                </b-col>
                <b-col class="p-0 item next" sm="6" md="2">
                    <a href="#">
                        <img src="~/static/img/foto-video3.jpg" alt class="img">
                        <img src="~/static/img/locker.svg" alt class="lock">
                        <p class="datos">
                            <span class="nombre">WING</span>
                            <span class="sistema">Sistema HAC Y DAC</span>
                        </p>
                        <div class="cover"></div>
                        <div class="txt">
                        Capítulo<br>
                        disponible<br>
                        el 1 de Marzo</div>
                    </a>
                </b-col>
                <b-col class="p-0 item next" sm="6" md="2">
                    <a href="#">
                        <img src="~/static/img/foto-video4.jpg" alt class="img">
                        <img src="~/static/img/locker.svg" alt class="lock">
                        <p class="datos">
                            <span class="nombre">SANTIAGO</span>
                            <span class="sistema">Sistema VSC</span>
                        </p>
                        <div class="cover"></div>
                        <div class="txt">
                        Capítulo<br>
                        disponible<br>
                        el 8 de Marzo</div>
                    </a>
                </b-col>
                <b-col class="p-0 item next" sm="6" md="2">
                    <a href="#">
                        <img src="~/static/img/foto-video5.jpg" alt class="img">
                        <img src="~/static/img/locker.svg" alt class="lock">
                        <p class="datos">
                            <span class="nombre">el resultado</span>
                            <!--<span class="sistema">Sistena ABS</span></p> -->
                        </p>
                        <div class="cover"></div>
                        <div class="txt">
                        Capítulo<br>
                        disponible<br>
                        el 15 de Marzo</div>
                    </a>
                </b-col>
            </b-row>
            <b-row class="suscribe px-0">
                <b-col class="m-0 p-0">
                    <a href="https://www.youtube.com/user/toyotaperu" target="_blank" class="btn">
                        <img src="~/static/img/suscribete.svg" alt>
                    </a>
                </b-col>
            </b-row>
        </div>
    </section>

    <section id="sistemas">
        <b-container fluid>
            <b-row class="mx-auto my-0 p-0 content">
                <b-col class="m-0 p-0">
                    <b-row class="m-0 p-0">
                        <b-col class="m-0 p-0 d-none d-md-block" sm="4" md="6"></b-col>
                        <b-col class="m-sm-auto m-md-0 p-0" sm="12" md="6">
                            <div class="panel">SISTEMAS
                                <br>
                                <span>DE SEGURIDAD</span>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="m-0 p-0 d-md-block" sm="4" md="6"></b-col>
                        <b-col class="m-sm-auto m-md-0 p-0" sm="7" md="6">
                            <p class="txt">
                                En Toyota
                                trabajamos para
                                seguir cumpliendo
                                los más altos
                                estándares de
                                seguridad para ti
                                y tu familia.
                            </p>
                            <p class="txt2">Por eso, cada uno de nuestros vehículos cuenta con dos sistemas de seguridad latentes para asistirte ante inconvenientes y protegerte o evitar cualquier tipo de riesgo.</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </section>

    <section id="seguridad" class="m-0 p-0">
        <b-container fluid class="m-0 p-0">
            <b-row class="m-0 p-0 relative" id="gates">
                <div class="seguridad container-fluid m-0 p-0">
                    
                    <img src="~static/img/spacer.png" alt="" class="spacer">
                    <div class="prevencion">
                        <b-row class="m-0 px-3 header">
                            <b-col class="mx-auto content px-0">
                                <b-row class="m-0 px-0 pb-3 regresar">
                                    <b-col class="m-0 p-0">
                                        <a href="#" @click.prevent="regresar()">
                                            <img src="~/static/img/btn-regresar.svg" alt>
                                        </a>
                                    </b-col>
                                </b-row>
                                <b-row class="mx-0 mb-4 p-0">
                                    <b-col class="m-0 pl-0 pr-3" sm="12" md="6">
                                        <h2 v-html="aliastype"></h2>
                                    </b-col>
                                    <b-col class="m-0 p-0" sm="12" md="6">
                                        <p>Ante un accidente inevitable, los dispositivos de este sistema, como cinturones de seguridad más efectivos, airbags testeados internacionalmente y más elementos, resguardarán tu seguridad y la de los pasajeros.</p>
                                    </b-col>
                                </b-row>
                                <b-row class="mx-auto tabs">
                                    <b-col class="m-0 p-0">
                                        <a href="#" @click.prevent="systemTypes(0)">
                                            <span></span>Seguridad de
                                            <br>PREVENCIÓN
                                            <img src="~/static/img/triangle-active.png" alt class="triangle">
                                        </a>
                                        <a href="#" @click.prevent="systemTypes(1)">
                                            <span></span>Seguridad de
                                            <br>PROTECCIÓN
                                            <img src="~/static/img/triangle-active.png" alt class="triangle">
                                        </a>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <b-row class="mx-0 my-4 pt-3 pr-3 pl-3 body">
                            <b-col class="mx-auto content px-0">
                                <b-row class="detail m-0 p-0">
                                    <b-col class="m-0 p-0" sm="4" v-for="(item, index) in category" :key="index">
                                        <a href="#" @click.prevent="selectCategory(index)" :class="{ 'active': index === currentCategory }" class="tab" v-if="item.type==type[currentType].name">{{ item.name }}
                                            <img src="~/static/img/triangle-active2.png" alt class="triangle">
                                        </a>
                                    </b-col>
                                </b-row>
                                <b-row class="mx-0 mt-4 px-0 pt-sm-2 pt-md-4">
                                    <b-col class="m-0 p-0 img" md="7">
                                        <img :src="category[currentCategory].img" alt="">
                                    </b-col>
                                    <b-col class="m-0 py-3" md="5">
                                        
                                        <b-row class="mx-0 mb-2 p-0" v-for="(item, index) in system" :key="index" v-if="item.category==category[currentCategory].name">
                                            <b-col cols="3" class="m-0 p-0 img">
                                                <img :src="item.img" alt="">
                                            </b-col>
                                            <b-col cols="4" class="txt">
                                                <div class="parent">
                                                    <div class="child">{{ item.name }}</div>
                                                </div>
                                            </b-col>
                                            <b-col cols="5" class="m-0 p-0">
                                                <div class="dash" v-if="item.category!='Certificaciones'">
                                                    <nuxt-link @click.native="systemName(item.slug)" :to="item.slug" class="ver">Ver Sistema</nuxt-link>
                                                </div>
                                                <div class="dash" v-if="item.category=='Certificaciones'">
                                                    <a :href="item.slug" target="_blank" class="ver">Ver Sistema</a>
                                                </div>
                                            </b-col>
                                        </b-row>

                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                    
                    <div class="detalle m-auto">
                        <b-row class="m-0 px-0 p-5 regresar">
                            <b-col class="m-0 p-0">
                                <a href="#" @click.prevent="backName()">
                                    <img src="~/static/img/btn-regresar.svg" alt>
                                </a>
                            </b-col>
                        </b-row>
                        <b-row class="m-0 p-0">
                            <b-col class="title px-5 text-center" sm="12" md="6">
                                <h2>{{ titulosistema }}<br>{{ subtitulosistema }}<br>
                                <span>{{ aliassistema }}</span></h2>
                            </b-col>
                            <b-col class="description px-5" sm="12" md="6">
                                <h2>{{ nombresistema }}</h2>
                                <ul>
                                    <li>{{ parrafouno }}</li>
                                    <li>{{ parrafodos }}</li>
                                </ul>
                            </b-col>
                        </b-row>
                    </div>

                </div>

                 <b-container fluid class="m-0 p-0 background">
                    <b-row class="border-top">
                        <b-col class="img">
                            <img src="~/static/img/base-img.png" alt="" class="base">
                            <img :src="imagensistema" alt="" class="sys">
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="text-info">
                            <b-row class="container mx-auto">
                                <b-col>
                                    <p><span>*Recuerda</span> que los sistemas de seguridad son preventivos y es importante que el conductor siempre mantenga una distancia y velocidad adecuada.</p>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-container>

                <b-container fluid class="m-0 p-0 interna-autos" id="toyotas">
                    <b-row class="autos">
                        <b-col>

                            <h1>Toyotas con <span>sistemas</span> <span class="uppercase">{{ aliassistema }}</span></h1>

                            <ul class="row mx-0 mt-0 mb-5 p-0">
                
                                <li class="col-md-3 col-sm-6 p-0" v-for="(item, index) in cars" :key="index" v-if="item.sistema==actualsistema">
                                    <div class="content">
                                        <div class="card" sm="6">
                                            <h6>{{ item.name }}</h6>
                                            <img :src="item.img" alt="" class="m-auto">
                                            <hr>
                                            <div>
                                                <a :href="item.link" class="btn btn-danger btn-ver-mas" target="_blank">INFO</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
    
                            </ul>
                        </b-col>
                    </b-row>
                </b-container>

                <b-col class="left m-0 p-0" id="leftgate">
                    <img src="~/static/img/left-gate.png" alt class="gate">
                    <b-col md="6" class="info p-0">
                        <div>
                            <h2>Seguridad de<br><span>Prevención</span></h2>
                        </div>
                        <div class="line">
                            <img src="~/static/img/diagonal.png" alt>
                        </div>
                        <p>Los sistemas de seguridad activa buscan que cualquier vehículo realice bien las acciones básicas: acelerar, virar y frenar.</p>
                        <a href="#" class="btn" @click.prevent="doorLeft()">VER SISTEMA</a>
                    </b-col>
                </b-col>

                <b-col class="right m-0 p-0" id="rightgate">
                    <img src="~/static/img/right-door.png" alt class="gate">
                    <b-col md="6" class="info p-0">
                        <div>
                            <h2>Seguridad de
                                <br>
                                <span>protección</span>
                            </h2>
                        </div>
                        <div class="line">
                            <img src="~/static/img/diagonal.png" alt>
                        </div>
                        <p>Los sistemas de protección buscan que cualquier vehículo reduzca al mínimo el peligro del conductor y sus acompañantes.</p>
                        <a href="#" class="btn" @click.prevent="doorRight()">VER SISTEMA</a>
                    </b-col>
                </b-col>
            </b-row>
        </b-container>
    </section>

    <section id="compromiso">
        <b-container fluid>
            <b-row class="mx-auto p-0 content relative">
                <div class="info">
                    <b-row class="m-0 p-0">
                        <b-col class="m-0 p-0">
                            <h3>Nuestro compromiso,
                                <br>
                                <span>es tu seguridad.</span>
                            </h3>
                            <div class="stars">
                                <img src="~/static/img/stars.png" alt>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="m-0 p-0">
                        <b-col class="py-sm-5 py-md-5 px-0 mr-auto txt" md="5">
                            <p>
                                Todos nuestros vehículos son testeados y
                                regulados en el Programa de Evaluación de
                                Vehículos Nuevos para América Latina y el
                                Caribe (Latin NCAP).
                            </p>

                            <p>Un programa internacional que comprueba la seguridad que brindan nuestros vehículos para cada ocupante adulto y niño, obteniendo los más altos puntajes en comparación a la competencia.</p>
                        </b-col>
                        <b-col class="m-0 py-sm-5 py-md-5 px-0 img" md="6">
                            <img src="~/static/img/compromiso-pic1.png" alt>
              </b-col>
                    </b-row>
                    <b-row class="m-0 p-0">
                        <b-col class="text-center resultados">
                            <h4>Conoce nuestros resultados</h4>
                            <a href="https://www.latinncap.com/es/resultados" target="_blank" class="btn">AQUÍ</a>
                        </b-col>
                    </b-row>
                </div>
            </b-row>
        </b-container>
    </section>

    <section id="standares">
        <b-container fluid>
            <div class="mx-auto m-0 p-0 relative content">
                <b-row class="mx-auto m-0 p-0 relative">
                    <b-col class="m-0 p-0 d-none d-md-block"></b-col>
                    <b-col class="m-0 p-0">
                        <div class="title">
                            <h3>ESTÁNDARES DE
                                <br>
                                <span>SEGURIDAD TOYOTA<br>en el mundo</span>
                            </h3>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="info mx-auto m-sm-0 m-md-0 p-md-0">
                    <b-col class="m-md-auto px-sm-5 px-md-5" sm="8" md="6">
                        <div>
                            <p>
                                <strong>
                                    Cada día desarrollamos más vehículos con
                                    sistemas de seguridad para asistir al conductor
                                    en toda la etapa de manejo.
                                </strong>
                            </p>

                            <p>
                                Además, queremos lograr vehículos que se
                                comuniquen con la infraestructura vial y el
                                espacio en el que se encuentran, para evitar
                                choques y aumentar la protección del
                                conductor y sus pasajeros.
                            </p>
                            <a href="https://www.toyota-global.com/innovation/safety_technology/approach/" target="_blank" class="btn"><img src="~/static/img/vermas.svg" alt></a>
                        </div>
                    </b-col>
                    <b-col class="m-0 p-0 d-md-block" sm="4" md="6"></b-col>
                </b-row>
            </div>
        </b-container>
    </section>

    <section id="faq">
        <b-container fluid>
            <b-row class="mx-auto m-0 p-0 content relative">
                <div class="info">
                    <b-row class="m-0 p-0">
                        <b-col class="m-0 pl-0 pr-3" sm="12" md="6">
                            <h2>PREGUNTAS
                                <br>
                                <span>FRECUENTES</span>
                            </h2>
                        </b-col>
                        <b-col class="m-0 p-0" sm="12" md="6">
                            <p class="txt">Deslice en cada pregunta y resuelva todas sus dudas sobre la seguridad y confianza que le brindan nuestra serie de vehículos.</p>
                        </b-col>
                    </b-row>
                    <b-row class="px-0 preguntas">
                        <b-col class="m-0 p-0">
                            <no-ssr>
                                <BulmaAccordion :dropdown="false" :icon="'caret'" :caretAnimation="{
                                    duration: '.3s',
                                    timerFunc: 'ease-in-out',
                                }" :slide="{
                                    duration: '.3s',
                                    timerFunc: 'ease',
                                }">
                                    <BulmaAccordionItem>
                                        <h4 slot="title">
                                            <span>1)</span> ¿Cómo Toyota comprueba la seguridad de sus autos?
                                        </h4>
                                        <p slot="content">Nuestros vehículos son puestos a prueba y regulados en el Programa de Evaluación de Vehículos Nuevos para América Latina y el Caribe (Latin NCAP). Una organización internacional que puede comprobar lo seguro que es un vehículo para el conductor, sus pasajeros y los peatones. Conozca nuestros resultados en:
                                            <a href="https://www.latinncap.com/es/resultados" target="_blank">https://www.latinncap.com/es/resultados</a>
                                        </p>
                                    </BulmaAccordionItem>
                                    <BulmaAccordionItem>
                                        <h4 slot="title">
                                            <span>2)</span> ¿Dónde puedo encontrar información sobre cada modelo?
                                        </h4>
                                        <p slot="content">Puede conocer todos los detalles del modelo que más le interese ingresando a:
                                            <a href="https://www.toyotaperu.com.pe/listado-modelos-toyota/" target="_blank" >https://www.toyotaperu.com.pe/listado-modelos-toyota/</a>
                                        </p>
                                    </BulmaAccordionItem>
                                    <BulmaAccordionItem>
                                        <h4 slot="title">
                                            <span>3)</span> ¿Cómo puedo comprobar la seguridad que ofrece Toyota en sus autos?
                                        </h4>
                                        <p slot="content">Queremos que usted pueda conocer que un auto no solo es un medio de transporte, sino un ambiente para compartir con su familia. Por eso, puede inscribirse en nuestros “Test de seguridad” y conocer más sobre la seguridad de nuestros vehículos a través de nuestros expertos.</p>
                                    </BulmaAccordionItem>
                                    <BulmaAccordionItem>
                                        <h4 slot="title">
                                            <span>4)</span> ¿Cómo me protege un auto Toyota ante un choque?
                                        </h4>
                                        <p slot="content">Cada uno de nuestros vehículos cuenta con dos sistemas de seguridad activos en todo momento. Uno de ellos está especializado para protegerlo ante una colisión inminente, activando los distintos dispositivos que lo resguardarán al igual que sus pasajeros.</p>
                                    </BulmaAccordionItem>
                                    <BulmaAccordionItem>
                                        <h4 slot="title">
                                            <span>5)</span> ¿Por qué Toyota se preocupa por la seguridad en sus autos?.
                                        </h4>
                                        <p slot="content">Nosotros manejamos el concepto de “Seguridad” para construir cada día autos más seguros para usted y su familia. Por eso, Toyota Global realiza investigaciones sobre los diferentes accidentes en el mundo y analiza los daños para poder crear sistemas y carrocerías más seguras para usted y su familia.</p>
                                    </BulmaAccordionItem>
                                </BulmaAccordion>
                            </no-ssr>
                        </b-col>
                    </b-row>
                </div>
            </b-row>
        </b-container>
    </section>

    <section id="postventa">
        <b-container fluid class="m-0 p-0">
            <div class="mx-auto m-0 p-0 relative content">
                <b-row class="info m-0 p-0">
                    <b-col class="left m-0 p-0" sm="12" md="6">
                        <div class="container">
                            <div class="postventa">
                                <h4>POSVENTA</h4>
                                <div class="diagonal">
                                    <img src="~/static/img/lineadiagonal.png" alt>
                  </div>
                                    <p>Tenemos un compromiso con tu Toyota de mantenerlo siempre como el primer día.</p>
                                    <a href="https://www.toyotaperu.com.pe/programa-de-posventa/" target="_blank" class="btn">
                    <img src="~/static/img/ver-mas.svg" alt>
                  </a>
                                </div>
                            </div>
                    </b-col>
                    <b-col class="right m-0 p-0" sm="12" md="6">
                        <div class="container">
                            <div class="garantia">
                                <h4>Garantía</h4>
                                <div class="diagonal">
                                    <img src="~/static/img/lineadiagonal.png" alt>
                  </div>
                                    <p>Disfruta de tu vehículo Toyota y conoce toda la información de su garantía.</p>
                                    <a href="https://www.toyotaperu.com.pe/condiciones-vigencia-garantia/" target="_blank" class="btn">
                    <img src="~/static/img/ver-mas.svg" alt>
                  </a>
                                </div>
                            </div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </section>

    <!-- END SECTIONS -->
    <!--LIGHTBOX-->
    <div class="md-modal md-effect-9" id="modal-9">
        <div class="md-content">
            <div class="iframe">
                <a href="#" class="md-close btn-close">
            <img src="~/static/img/close_btn.png" alt>
          </a>
                <iframe
            src
            frameborder="0"
            id="videolightbox"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
            </div>
        </div>
    </div>
    <div class="md-overlay"></div>
    <!--END LIGHTBOX-->
    <!-- FOOTER -->
    <footer class="container-fluid bloque_footer">
        <div class="row footer-header">
            <div class="container">
                <div class="row w-100">
                    <div class="col-auto">
                        <img src="~/static/img/logo_footer.png" class="img-responsive">
                    </div>
                    <div class="col d-none d-sm-block">
                        <ul class="inline pull-right">
                            <li>
                                <a href="http://www.toyota-global.com" target="_blank" data-ga="footer/toyota-global">
                                    <img src="~/static/img/icon-1.png">
                                </a>
                            </li>
                            <li>
                                <a href="http://www.lexusperu.com.pe/es.html" target="_blank" data-ga="footer/lexusperu">
                                    <img src="~/static/img/icon-2.png">
                                </a>
                            </li>
                            <li>
                                <a href="http://www.hinoperu.com.pe" target="_blank" data-ga="footer/hinoperu">
                                    <img src="~/static/img/icon-3.png">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row footer-links">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-sm">
                        <h4>Quienes somos</h4>
                        <ul class="vertical-menu">
                            <li>
                                <a href="https://www.toyotaperu.com.pe/historia#historia" data-ga="footer/quienes-somos/historia">historia</a>
                            </li>

                            <li>
                                <a href="https://www.toyotaperu.com.pe/historia#mision" data-ga="footer/quienes-somos/mision">Misión</a>
                            </li>

                            <li>
                                <a href="https://www.toyotaperu.com.pe/historia#vision" data-ga="footer/quienes-somos/vision">Visión</a>
                            </li>

                            <li>
                                <a href="https://www.toyotaperu.com.pe/historia#filosofia" data-ga="footer/quienes-somos/filosofia">Filosofía</a>
                            </li>

                            <li>
                                <a href="https://www.toyotaperu.com.pe/historia#valores" data-ga="footer/quienes-somos/valores">Valores</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-6 col-sm">
                        <h4>Novedades</h4>
                        <ul class="vertical-menu">
                            <li>
                                <a href="https://www.toyotaperu.com.pe/ofertas-y-promociones" data-ga="footer/novedades/promociones">promociones</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/eventos" data-ga="footer/novedades/eventos">Eventos</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/noticias" data-ga="footer/novedades/noticias">Noticias</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/comunicados-regulaciones" data-ga="footer/novedades/comunicados-regulaciones">Comunicados</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/por-que-elegir-un-toyota" data-ga="footer/novedades/por-que-elegir-un-toyota">por qué elegir un toyota</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-sm">
                        <h4>Escoge tu Toyota</h4>
                        <ul class="vertical-menu">
                            <li>
                                <a href="https://www.toyotaperu.com.pe/listado-modelos-toyota" data-ga="footer/escoge-tu-toyota/listado-modelos-toyota">Modelos</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/escoge-tu-toyota" data-ga="footer/escoge-tu-toyota/escoge-tu-toyota">comparar modelos</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-6 col-sm">
                        <h4>Compra tu toyota</h4>
                        <ul class="vertical-menu">
                            <li>
                                <a href="https://www.toyotaperu.com.pe/concesionarios-toyota" data-ga="footer/compra-tu-toyota/concesionarios-toyota">concesionarios</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/planes-financiamiento-de-autos-toyota" data-ga="footer/compra-tu-toyota/planes-financiamiento-de-autos-toyota">financiamiento</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/cotizador" data-ga="footer/compra-tu-toyota/cotizador">Cotizar</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/condiciones-vigencia-garantia" data-ga="footer/compra-tu-toyota/condiciones-vigencia-garantia">Garantía</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/programa-de-posventa" data-ga="footer/compra-tu-toyota/programa-de-posventa">posventa</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/prueba-de-manejo" data-ga="footer/compra-tu-toyota/prueba-de-manejo">prueba de manejo</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-6 col-sm">
                        <h4>contáctanos</h4>
                        <ul class="vertical-menu">
                            <li>
                                <a href="/">línea gratuita 0800-00669</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/llamado-revision" data-ga="footer/contactenos/llamado-revision">llamado a revisión</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/contacto/consultas" data-ga="footer/contactenos/consultas">consultas</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/contacto/reclamos" data-ga="footer/contactenos/reclamos">reclamos</a>
                            </li>
                            <li>
                                <a href="https://www.toyotaperu.com.pe/preguntas-frecuentes" data-ga="footer/contactenos/preguntas-frecuentes">preguntas frecuentes</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-6 d-block d-sm-none"></div>

                    <div class="col container-social-media">
                        <div class="row w-100">
                            <div class="col text-center">
                                <p class="siguenos">síguenos en:</p>
                            </div>
                        </div>
                        <ul class="row">
                            <li class="col">
                                <a target="_blank" href="https://www.youtube.com/toyotaperu" data-ga="footer/social-media/youtube">
                                    <img src="~/static/img/icon-youtube.png">
                                </a>
                            </li>
                            <li class="col">
                                <a target="_blank" href="https://twitter.com/Toyota_Peru" data-ga="footer/social-media/twitter">
                                    <img src="~/static/img/icon-twitter.png">
                                </a>
                            </li>
                            <li class="col">
                                <a target="_blank" href="https://www.facebook.com/ToyotaPeru" data-ga="footer/social-media/facebook">
                                    <img src="~/static/img/icon-facebook.png">
                                </a>
                            </li>
                            <li class="col">
                                <a target="_blank" href="https://www.instagram.com/toyotaperu" data-ga="footer/social-media/instagram">
                                    <img src="~/static/img/icon-instagram.png">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="container footer-bottom">
            <div class="row w-100">
                <div class="col">
                    <ul class="inline">
                        <li>
                            <a target="_blank" href="/sites/all/themes/toyota/pdf/politica.pdf" data-ga="footer/pdf/politica">Política de Privacidad</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.toyotaperu.com.pe/sites/default/files/Textos%20legales%20Junio%20TOYOTA%20MAS%20%281%29.pdf" data-ga="footer/pdf/tyc">términos y condiciones</a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <p class="pull-right">© Toyota copyright © all rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
    <!-- END FOOTER -->
</div>
</template>

<script>3
import Vue from 'vue'
import Menu from '../components/Menu'

// require styles
//import 'swiper/dist/css/swiper.css'

import {
    BulmaAccordion,
    BulmaAccordionItem
} from 'vue-bulma-accordion'

export default {
    data() {
        return {
            slide: 0,
            sliding: null,
            video: {
                capitulo: 'Capítulo 1',
                title: 'Óscar, los peores reflejos contra los mejores frenos.',
                description: 'Desde niño, Óscar ha tenido malos reflejos, lo cual fue un obstáculo a la hora de manejar. Hoy, a sus 49 años, Toyota pone a prueba esas reacciones en uno de sus vehículos.',
                system: 'SISTEMA BA:<br>Break Assist (Asistencia de frenado)',
                quote: 'Conoce más sobre el<br>sistema que ayudó a Óscar.',
                idvideo: 'hGjNcnbQdmg',
                img: '/img/video-oscar.jpg'
            },
            infoVideo: [
                {
                    capitulo: 'Capítulo 1',
                    title: 'Óscar, los peores reflejos contra los mejores frenos.',
                    description: 'Desde niño, Óscar ha tenido malos reflejos, lo cual fue un obstáculo a la hora de manejar. Hoy, a sus 49 años, Toyota pone a prueba esos reflejos en uno de sus vehículos.',
                    system: 'SISTEMA BA<br>(Potencia en frenado de emergencia)',
                    quote: 'Conoce más sobre el<br>sistema que ayudo a Óscar.',
                    idvideo: 's4cdJ3W97Gs',
                    img: '/img/video1.jpg'
                },
                {
                    capitulo: 'Capítulo 2',
                    title: 'José 2, los peores reflejos contra los mejores frenos.',
                    description: 'Desde niño 2 , José ha tenido malos reflejos, lo cual fue un obstáculo a la hora de manejar. Hoy, a sus 49 años, Toyota pone a prueba esos reflejos en uno de sus vehículos.',
                    system: 'SISTEMA BA2<br>(Potencia en frenado de emergencia)',
                    quote: 'Conoce más 2 sobre el<br>sistema que ayudo a José.',
                    idvideo: 's4cdJ3W97Gs',
                    img: '/img/video2.jpg'
                }
            ],
            waypointed: false,
            nav: true,
            type: [
                { 
                    name: 'Seguridad de Prevención',
                    slug: 'seguridad-de-prevencion',
                    alias: "Seguridad de<br><span>PREVENCIÓN</span>"
                },
                { 
                    name: 'Seguridad de Protección',
                    slug: 'seguridad-de-proteccion',
                    alias: "Seguridad de<br><span>PROTECCIÓN</span>"
                }
            ],
            category: [
                { 
                    type: 'Seguridad de Prevención',
                    name: 'Asistencia de frenado',
                    slug: 'asistencia-de-frenado',
                    img: '/img/prevencion-pic1.jpg'
                },
                { 
                    type: 'Seguridad de Prevención',
                    name: 'Asistencia de construcción',
                    slug: 'asistencia-de-construccion',
                    img: '/img/prevencion-pic1.jpg'
                },
                { 
                    type: 'Seguridad de Prevención',
                    name: 'Asistencia de tracción',
                    slug: 'asistencia-de-traccion',
                    img: '/img/prevencion-pic1.jpg'
                },
                { 
                    type: 'Seguridad de Protección',
                    name: 'Colisión',
                    slug: 'colision',
                    img: '/img/proteccion-pic1.jpg'
                },
                { 
                    type: 'Seguridad de Protección',
                    name: 'Sujeción',
                    slug: 'sujecion',
                    img: '/img/proteccion-pic2.jpg'
                },
                { 
                    type: 'Seguridad de Protección',
                    name: 'Certificaciones',
                    slug: 'certificaciones',
                    img: '/img/proteccion-pic3.jpg'
                },
            ],
            system: [{
                    type: 'Seguridad de Prevención',
                    category: 'Asistencia de frenado',
                    name: 'Asistencia antibloqueo de ruedas',
                    slug: 'abs',
                    alias: 'ABS',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PREVENCIÓN',
                    list: [
                        'Con esta función de tu vehículo Toyota, al realizar un frenado de emergencia, las ruedas de tu auto evitarán bloquearse y eludirán una situación de riesgo.',
                        'Además, podrás tener un mayor control del vehículo, evitando cualquier obstáculo y manteniendo la dirección, para frenar de manera adecuada.'
                    ],
                    img: '/img/prevencion-badge1.png',
                    img2: '/img/abs.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Prevención',
                    category: 'Asistencia de frenado',
                    name: 'Distribución electrónica de frenado',
                    slug: 'ebd',
                    alias: 'EBD',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PREVENCIÓN',
                    list: [
                        'Este es un sistema añadido al ABS (Sistema de frenos antibloqueo), que permite distribuir de forma apropiada la fuerza de frenado.',
                        'Es decir, te ayudará a mantener el equilibrio del auto ante cualquier inconveniente para un frenado más seguro.'
                    ],
                    img: '/img/prevencion-badge2.png',
                    img2: '/img/ebd.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Prevención',
                    category: 'Asistencia de frenado',
                    name: 'Potencia en frenado de emergencia',
                    slug: 'ba',
                    alias: 'BA',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PREVENCIÓN',
                    list: [
                        'Con este sistema, los conductores que no puedan presionar el pedal de freno con la fuerza necesaria, tendrán un apoyo de frenado adicional.',
                        'Así evitarás cualquier accidente en la vía, además de protegerte junto a tus pasajeros.'
                    ],
                    img: '/img/prevencion-badge3.png',
                    img2: '/img/ba.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Prevención',
                    category: 'Asistencia de construcción',
                    name: 'Asistencia de estabilidad vehicular',
                    slug: 'vsc',
                    alias: 'VSC',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PREVENCIÓN',
                    list: [
                        'Al ingresar a las curvas o en carreteras resbaladizas, este sistema se activa para brindarte mayor estabilidad.',
                        'Te ayudará a mantener el control del vehículo y poder trasladarte de la manera más óptima y segura.'
                    ],
                    img: '/img/prevencion-badge4.png',
                    img2: '/img/vsc.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Prevención',
                    category: 'Asistencia de construcción',
                    name: 'Control de pendientes',
                    slug: 'hac',
                    alias: 'HAC',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PREVENCIÓN',
                    list: [
                        'Este sistema está diseñado para reducir el riesgo que tiene tu vehículo de irse hacia atrás en pendientes ascendentes.',
                        'Te brinda un control más seguro, para evitar choques con los vehículos atrás de ti. '
                    ],
                    img: '/img/prevencion-badge5.png',
                    img2: '/img/hac.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Prevención',
                    category: 'Asistencia de construcción',
                    name: 'Control de descenso',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PREVENCIÓN',
                    slug: 'dac',
                    alias: 'DAC',
                    list: [
                        'En vías descendientes, este sistema mantiene el vehículo estable y seguro para que tú puedas tener un mayor control del vehículo.',
                        'Facilitándote un descenso sin problemas y evitando cualquier inconveniente con otros autos.'
                    ],
                    img: '/img/prevencion-badge6.png',
                    img2: '/img/dac.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Prevención',
                    category: 'Asistencia de tracción',
                    name: 'Control de tracción',
                    slug: 'trc',
                    alias: 'TRC',
                    list: [
                        'Ante vías que puedan generar un bloqueo en tus llantas, el TRC se activará para poder equilibrar la potencia y darte un mayor control de tu vehículo.',
                        'Los sensores de este control de tracción te permitirán no detenerte en las vías y viajar con confianza.'
                    ],
                    title: 'SEGURIDAD',
                    subtitle: 'DE PREVENCIÓN',
                    img: '/img/prevencion-badge7.png',
                    img2: '/img/trc.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Prevención',
                    category: 'Asistencia de tracción',
                    name: 'Control de tracción todo terreno',
                    slug: 'a-trc',
                    alias: 'A-TRC',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PREVENCIÓN',
                    list: [
                        'Controla la presión del frenado en cada rueda al acelerar en condiciones 4x4, evitando el deslizamiento de ruedas.',
                        'También te asiste en subidas y pendientes, para una performance de viaje más óptima.'
                    ],  
                    img: '/img/prevencion-badge8.png',
                    img2: '/img/atrc.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Prevención',
                    category: 'Asistencia de tracción',
                    name: 'CRAWL',
                    slug: 'crawl',
                    alias: 'CRAWL',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PREVENCIÓN',
                    list: [
                        'Diseñado para condiciones extremas de baja velocidad fuera de carretera.',
                        'Crawl Control reduce su entrada en la conducción fuera de carretera al controlar el acelerador y los frenos por usted.'
                    ],
                    img: '/img/prevencion-badge9.png',
                    img2: '/img/crawl.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Protección',
                    category: 'Colisión',
                    name: 'Carrocería de seguridad en colisiones',
                    slug: 'goa',
                    list: [
                        'Los vehículos Toyota están equipados con un sistema de deformación programada y absorción de impactos que brinda tranquilidad en la conducción del mismo.',
                        'Tanto en colisiones frontales, laterales y traseras, el sistema GOA aboserve la energía del impacto, disipando la fuerza del mismo por toda la estructura, lo cual ayuda a minimizar la deformación de la cabina y defendiendo la integridad de sus pasajeros.'
                    ],
                    alias: 'GOA',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PROTECCIÓN',
                    img: '/img/proteccion-badge1.png',
                    video: ''
                },
                {
                    type: 'Seguridad de Protección',
                    category: 'Colisión',
                    name: 'Toyota New Global Architecture',
                    slug: 'tnga',
                    alias: 'TNGA',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PROTECCIÓN',
                    list: [
                        'Integramos este sistema para optimizar nuestros procesos de fabricación, mejorando la calidad y seguridad de toda nuestra serie de vehículos.',
                        'Creando automóviles diseñados para absorber el máximo de daño posible y logre el mínimo daño en la cabina, se resguardan al conductor y sus pasajeros.'
                    ],
                    img: '/img/proteccion-badge2.png',
                    img2: '/img/tnga.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Protección',
                    category: 'Colisión',
                    name: 'Protección de choques',
                    slug: 'airbags',
                    alias: 'AIRBAGS',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PROTECCIÓN',
                    list: [
                        'Ante una colisión frontal de gran magnitud, las bolsas de aire SRS, junto a los cinturones de seguridad, lo ayudarán a mantenerse seguro.',
                        'Se activan para ayudar a que los cuerpos de los ocupantes y el conductor se golpeen contra el volante o el panel, protegiéndolos completamente.'
                    ],
                    img: '/img/proteccion-badge3.png',
                    img2: '/img/airbags.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Protección',
                    category: 'Sujeción',
                    name: 'Protección ante colisiones',
                    slug: 'cinturones',
                    alias: 'CINTURONES',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PROTECCIÓN',
                    list: [
                        'Nuestros cinturones cuentan con pretensor y limitador de fuerza que se activan al detectar un fuerte impacto frontal, aumentando la firmeza para sujetar a los ocupantes y limitando la intensidad que se aplica en el pecho.',
                        'Así evitará poner en riesgo la seguridad de cada uno de los ocupantes con un performance de ejecución excelente.'
                    ],
                    img: '/img/proteccion-badge4.png',
                    img2: '/img/cinturones.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Protección',
                    category: 'Sujeción',
                    name: 'Anclajes ISOFIX',
                    slug: 'isofix',
                    alias: 'ISOFIX',
                    title: 'SEGURIDAD',
                    subtitle: 'DE PROTECCIÓN',
                    list: [
                        'Nuestros vehículos que cuentan con este sistema, tienen anclajes especiales en los asientos para sujetar las butacas de infantes.',
                        'Evitando usar los mismos cinturones de seguridad y ofreciéndole la confianza para viajar con tranquilidad.'
                    ],
                    img: '/img/proteccion-badge5.png',
                    img2: '/img/isofix.jpg',
                    video: ''
                },
                {
                    type: 'Seguridad de Protección',
                    category: 'Certificaciones',
                    name: 'Certificados',
                    slug: 'https://www.latinncap.com/es/resultados',
                    img: '/img/proteccion-badge6.png'
                }
            ],
            currentType: 0,
            currentCategory: 0,
            currentSystem: 0,
            openGates: false,
            categoria: this.$route.params.categoria,
            sistema: this.$route.params.sistema,
            id: this.$route.params.id,
            nombre_sistema: this.$route.params.nombre,
            currentSystemName: null, 
            cars: [],
            actualsistema: 'Sistema',
            titulosistema: 'Sistema',
            subtitulosistema: 'Sistema',
            parrafouno: 'Sistema',
            parrafodos: 'Sistema',
            nombresistema: 'Sistema',
            aliassistema: 'Sistema',
            imagensistema: 'Sistema',
            navsistema: false,
            aliastype: null,
            test: "test"
        }
    },
    created(){

        this.getCars()
        
        var categoria = this.$route.params.categoria
        var sistema = this.$route.params.sistema
        var id = this.$route.params.id
        var nombre_sistema = this.$route.params.nombre
    },
    components: {
        BulmaAccordion,
        BulmaAccordionItem,
        Menu
    },
    mounted() {
        const btntrailer = $('.slide1 .btn-line .btn')
        const videothumbsitem = document.querySelectorAll('.video-thumbs .item a')
        const videoplay = $('.right .video .play')
        const _this = this
        var categoria = this.categoria,
            sistema = this.sistema,
            nombre_sistema = this.nombre_sistema,
            id = this.id

        videoplay.on('click', function (e) {
            e.preventDefault()
            const id = $(this).attr('href')
            _this.loadVideo(id)
        })

        btntrailer.on('click', function (e) {
            e.preventDefault()
            const id = $(this).attr('href')
            _this.loadVideo(id)
        })

        Array.from(videothumbsitem).forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault()
                const id = link.getAttribute('href')
                if (id != '#') {
                    _this.loadDataVideo(id)
                }
            })
        })

        this.setWaypoint()

        function scrollToSection(section, duration, url) {

            $.scrollTo($(section), duration, {
                easing: 'easeInOutQuad',
                onAfter: function () {

                    _this.$router.push({
                        path: url
                    })
                    
                    setTimeout(function () {
                        switch(categoria){
                            case 'tipos-de-sistemas-de-seguridad':
                                   if(sistema!=undefined){
                                        let currentType = (sistema == "seguridad-de-prevencion") ? 0 : 1
                                        _this.currentType = currentType
                                        let anim = (currentType == 0) ? _this.doorLeft() : _this.doorRight()
                                    }
                                break
                        }
                        
                        _this.nav = false
                        
                    }, 1000)

                }
            })
        }

        $('.main-nav ul li a').on('click', function(e){
            e.preventDefault()
            
            _this.nav = true
            let href = $(this).attr('href')

            $('.main-nav ul li a').removeClass('active');
            $(this).addClass('active')
            
            switch (href) {
                case '/videos':
                    scrollToSection('#videos', 1000, '/videos')
                    break
                case '/sistemas-de-seguridad':
                    scrollToSection('#sistemas .panel', 1000, '/sistemas-de-seguridad')
                    break
                case '/tipos-de-sistemas-de-seguridad':
                    if ($(window).width() > 767) {
                        if($('#seguridad .left .gate').is(':visible')){
                            scrollToSection('#seguridad .left .gate', 1000, '/tipos-de-sistemas-de-seguridad')
                        } else {
                            scrollToSection('#seguridad', 1000, '/tipos-de-sistemas-de-seguridad')
                        }
                    } else {
                        scrollToSection('#seguridad', 1000, '/tipos-de-sistemas-de-seguridad')
                    }
                    break
                case '/nuestro-compromiso':
                    scrollToSection('#compromiso .content', 1000, '/nuestro-compromiso')
                    break
                case '/estandares-de-seguridad':
                    scrollToSection('#standares .content .title', 1000, '/estandares-de-seguridad')
                    break
                case '/preguntas-frecuentes':
                    scrollToSection('#faq', 1000, '/preguntas-frecuentes')
                    break
                case '/postventa':
                    scrollToSection('#postventa', 1000, '/postventa')
                    break
                case '/':
                    scrollToSection('#home', 1000, '/')
                    break
            }
        })

        switch (categoria) {
            case 'videos':
                $('.main-nav ul li a').filter("[href='/videos']").addClass('active')
                scrollToSection('#videos', 0, '/videos')
                break
            case 'sistemas-de-seguridad':
                $('.main-nav ul li a').filter("[href='/sistemas-de-seguridad']").addClass('active')
                scrollToSection('#sistemas .panel', 0, '/sistemas-de-seguridad')
                break
            case 'tipos-de-sistemas-de-seguridad':
                
                $('.main-nav ul li a').filter("[href='/tipos-de-sistemas-de-seguridad']").addClass('active')
                
                let url;

                if(nombre_sistema!=undefined){
                    $('section#seguridad .prevencion .header').addClass('hidden')
                    url = '/' + categoria + '/' + sistema + '/' + id + '/' + nombre_sistema
                    _this.conoceSistema(nombre_sistema, false)
                } else {
                    if(sistema!=undefined && id==undefined){
                        url = '/' + categoria + '/' + sistema
                    } else if(sistema!=undefined && id!=undefined){
                        url = '/' + categoria + '/' + sistema + '/' + id
                    } else {
                        url = categoria
                    }
                }

                if ($(window).width() > 767) {
                    if($('#seguridad .left .gate').is(':visible')){
                        scrollToSection('#seguridad .left .gate', 0, url)
                    } else {
                        scrollToSection('#seguridad', 0, url)
                    }
                } else {
                    scrollToSection('#seguridad', 0, url)
                }

                break
            case 'nuestro-compromiso':
                $('.main-nav ul li a').filter("[href='/nuestro-compromiso']").addClass('active')
                scrollToSection('#compromiso .content', 0, '/nuestro-compromiso')
                break
            case 'estandares-de-seguridad':
                $('.main-nav ul li a').filter("[href='/estandares-de-seguridad']").addClass('active')
                scrollToSection('#standares .content .title', 0, '/estandares-de-seguridad')
                break
            case 'preguntas-frecuentes':
                $('.main-nav ul li a').filter("[href='/preguntas-frecuentes']").addClass('active')
                scrollToSection('#faq', 0, '/preguntas-frecuentes')
                break
            case 'postventa':
                $('.main-nav ul li a').filter("[href='/postventa']").addClass('active')
                scrollToSection('#postventa', 0, '/postventa')
                break
            default:
                $('.main-nav ul li a').filter("[href='/']").addClass('active')
                scrollToSection('#home', 0, '/')
                break
        }

        this.Resize()

        $(window).on('resize', function () {
            _this.Resize()
        })

        $(window).on('popstate',function(event) {
            switch(window.location.pathname){
                case '/':
                    if (!_this.nav) {
                        _this.nav = true
                        _this.scrollToSection('#home', 1000, '/')
                    }else{
                        _this.nav = false
                    }
                break

                case '/videos':
                    if (!_this.nav) {
                        _this.nav = true
                        _this.scrollToSection('#videos', 1000, '/videos')
                    }else{
                        _this.nav = false
                    }
                break

                case '/tipos-de-sistemas-de-seguridad':
                    if (!_this.nav && _this.openGates && $(window).width()>767 && $('#leftgate').not(':visible')) {
                        _this.regresar()
                        _this.openGates = false
                    }else{
                        _this.openGates = true
                    }
                break
            }
        })

        $(document).ready(function(){
            $('#preloader').delay(350).fadeOut(350)
        })

    },
    watch: {
        '$route': {
            deep: true,
            handler: function () {
                let slug = this.$route.params.nombre
                let _this = this
                if(slug != undefined){
                    $('#seguridad .prevencion').fadeOut(350, function(){
                        $(this).removeAttr('style').removeClass('d-block').addClass('hidden')
                        $('#seguridad .spacer').removeClass('d-block').addClass('hidden')
                        $('#seguridad .detalle, #seguridad .background, #seguridad .interna-autos').show()
                        $('#seguridad .detalle, #seguridad .background, #seguridad .interna-autos').removeAttr('style').removeClass('hidden').addClass('d-block')
                    })
                }
            }
        }
    },
    methods: {
        doorLeft() {

            const _this = this
            this.currentType = 0


            $('#seguridad .left').addClass('slide-out')
            $('#seguridad .right').addClass('slide-out-r')
            $('#seguridad .spacer').removeClass('d-block').addClass('hidden')

            if(this.navsistema==false){
                $.scrollTo($('#seguridad'), 500)
            }

            if(_this.nombre_sistema!=undefined){
                $('#seguridad .prevencion').addClass('hidden')
                $('#seguridad .detalle, #seguridad .background, #seguridad .interna-autos').addClass('d-block')
                
                $('#gates').addClass('overflow-hidden')

                setTimeout(function(){
                    $('#seguridad .left, #seguridad .right').removeClass('d-block').addClass('hidden')
                }, 500)

            } else {
                $('#seguridad .prevencion').addClass('d-block')
                $('#seguridad .prevencion').css('height', '757px')
                $('#seguridad .prevencion .header').removeClass('hidden').fadeIn(350, function () {
                    $(this).removeAttr('style').addClass('d-block')
                    _this.systemTypes(_this.currentType)
                    $('#gates').addClass('overflow-hidden')
                    $('#seguridad .prevencion .body').removeClass('hidden').fadeIn(350, function(){$(this).removeAttr('style').addClass('d-block')})
                    $('#seguridad .prevencion').css('height', 'auto')
                    $('#seguridad .left, #seguridad .right').removeClass('d-block').addClass('hidden')
                    $('#seguridad .left, #seguridad .right').removeClass('d-block').addClass('hidden')
                    setTimeout(function(){
                        _this.openGates = true
                    }, 500)
                })
            }
        },
        doorRight() {
            const _this = this
            this.currentType = 1
            
            $('#seguridad .left').addClass('slide-out')
            $('#seguridad .right').addClass('slide-out-r')
            $('#seguridad .spacer').removeClass('d-block').addClass('hidden')

           $.scrollTo($('#seguridad'), 500)

            if(_this.nombre_sistema!=undefined){
                $('#seguridad .prevencion').addClass('hidden')
                $('#seguridad .detalle, #seguridad .background, #seguridad .interna-autos').addClass('d-block')
                $('#gates').addClass('overflow-hidden')
            } else {
                $('#seguridad .prevencion').addClass('d-block')
                $('#seguridad .prevencion').css('height', '757px')
                $('#seguridad .prevencion .header').removeClass('hidden').fadeIn(350, function () {
                    $(this).removeAttr('style').addClass('d-block')
                    _this.systemTypes(_this.currentType)
                    $('#gates').addClass('overflow-hidden')
                    $('#seguridad .prevencion .body').removeClass('hidden').fadeIn(350, function(){$(this).removeAttr('style').addClass('d-block')})
                    $('#seguridad .prevencion').css('height', 'auto')
                    $('#seguridad .left').removeClass('hidden').addClass('d-block')
                    $('#seguridad .right').removeClass('hidden').addClass('d-block')
                    setTimeout(function(){
                        _this.openGates = true
                    }, 500)
                })
            }
        },
        regresar() {
            this.currentType = 0
            this.currentCategory = 0
            this.currentSystemName = null
            var _this = this
            this.nav = true
            this.sistema = undefined
            this.nombre_sistema = undefined
            this.id = undefined
            
            $('#seguridad .left').removeClass('hidden').addClass('d-block')
            $('#seguridad .right').removeClass('hidden').addClass('d-block')
            
            $.scrollTo($('#seguridad .left .gate'), 350)
            
            $('#gates').removeClass('overflow-hidden')
            
            $('#seguridad .prevencion .body').removeClass('d-block').fadeOut(350, function () {
                $(this).addClass('hidden')
                $('section#seguridad .prevencion .header').removeClass('d-block').addClass('hidden')
                $('section#seguridad .spacer').removeClass('hidden').addClass('d-block')
            })

            $('#seguridad .left').removeClass('slide-out').addClass('slide-in-l')
            $('#seguridad .right').removeClass('slide-out-r').addClass('slide-in-r')

            this.$router.push({
                path: '/tipos-de-sistemas-de-seguridad'
            })
            setTimeout(function(){
                _this.nav = false
            }, 250)
        },
        backName(){
            this.currentSystemName = null
            var url
            var _this = this
            var currCat = (this.currentCategory == null) ? 0 : this.currentCategory
            this.nav = true
            this.sistema = undefined
            this.nombre_sistema = undefined

            if(this.nombre_sistema==undefined){
                
                $('#seguridad .detalle, #seguridad .background, #seguridad .interna-autos').fadeOut(350, function(){
                
                    $(this).removeAttr('style').removeClass('d-block').addClass('hidden')
                    //$('#seguridad .spacer').removeClass('hidden').addClass('d-block')
                    $('#seguridad .prevencion').show()
                    $('#seguridad .prevencion .header, #seguridad .prevencion .body').removeClass('hidden').addClass('d-block')
                    //$('#seguridad .spacer').removeClass('d-block').addClass('hidden')
                    $('#seguridad .prevencion').removeAttr('style').removeClass('hidden').addClass('d-block')
                    
                    var t
                    
                    clearTimeout(t)

                    t = setTimeout(function(){
                        
                        this.Waypoint.destroyAll()
                        _this.setWaypoint()
                        _this.nav = false
                        setTimeout(function(){
                            _this.$router.push({
                                path: '/tipos-de-sistemas-de-seguridad/' + _this.type[_this.currentType].slug + '/' + _this.category[_this.currentCategory].slug
                            })
                        }, 250)

                    }, 250)

                })
            }
        },
        loadVideo(id) {
            $('#videolightbox').attr('src','https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0&autoplay=1&vq=hd1080')
        },
        loadDataVideo(id) {
            this.video.capitulo = this.infoVideo[id].capitulo
            this.video.title = this.infoVideo[id].title
            this.video.description = this.infoVideo[id].description
            this.video.system = this.infoVideo[id].system
            this.video.quote = this.infoVideo[id].quote
            this.video.idvideo = this.infoVideo[id].idvideo
            this.video.img = this.infoVideo[id].img
            $('.right .video .img')
                .hide()
                .fadeIn(1000)
        },
        fbs_click(width, height) {
            
            var leftPosition, topPosition

            leftPosition = window.screen.width / 2 - (width / 2 + 10)
            topPosition = window.screen.height / 2 - (height / 2 + 50)
            
            var windowFeatures = 'status=no,height=' + height +  ',width=' +  width + ',resizable=yes,left=' + leftPosition + ',top=' + topPosition + ',screenX=' + leftPosition + ',screenY=' + topPosition + ',toolbar=no,menubar=no,scrollbars=no,location=no,directories=no'
            
            var u = 'https://toyotaperu.com.pe/seguridad'
            var t = document.title
            
            window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', windowFeatures)

        },
        tws_click(width, height) {
            var left = screen.width / 2 - width / 2,
                top = screen.height / 2 - height / 2,
                t = this.video.title,
                u = 'https://toyotaperu.com.pe/seguridad'
            window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(t) + '&url=' + encodeURIComponent(u) + '%2F&via=toyota_peru','','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' +width + ',height=' + height + ',top=' + top + ',left=' + left )
        },
        systemTypes(id){
            let sistema = this.sistema
            let ids = this.id
            let url
            var _this = this
            var result_ids, index_ids

            this.currentType = id;

            this.aliastype = this.type[this.currentType].alias

            if(ids!=undefined){
                result_ids = $.grep(_this.category, function(e){ return e.slug == ids })
                index_ids = _this.category.findIndex(x => x.slug == ids);
                this.currentCategory = index_ids
                if(id==0 && this.currentCategory>=3){
                    this.currentCategory = 0;
                }
                if(id==1 && this.currentCategory<3){
                    this.currentCategory = 3;
                }
            } else {
                if(id==0){
                    this.currentCategory = 0
                } else {
                    this.currentCategory = 3
                }
            }
            
            $('.tabs a').removeClass('active')
            $('.tabs a:eq('+id+')').addClass('active')
            url = '/tipos-de-sistemas-de-seguridad/' + this.type[this.currentType].slug + '/' + _this.category[this.currentCategory].slug

            if(this.nombre_sistema==undefined){
                this.$router.push({
                    path: url
                })
            }
            
        },
        selectCategory(index){
            let url
            this.currentCategory = index
            this.id = this.category[index].slug
            let currType = (this.currentType == null) ? 0 : this.currentType
            url = '/tipos-de-sistemas-de-seguridad/' + this.type[currType].slug + '/' + this.category[this.currentCategory].slug
            this.$router.push({
                path: url
            })
        },
        systemName(slug){
            this.nav = true
            let url
            let _this = this
            let index = _this.system.findIndex(x => x.slug == slug)
            let currCat = (this.currentCategory == null) ? 0 : this.currentCategory
            this.currentSystemName = index
            url = '/tipos-de-sistemas-de-seguridad/' + this.type[this.currentType].slug + '/' + this.category[currCat].slug + '/' + _this.system[index].slug
            this.actualsistema = this.system[this.currentSystemName].slug
            this.titulosistema = this.system[this.currentSystemName].title
            this.subtitulosistema = this.system[this.currentSystemName].subtitle
            this.parrafouno = this.system[this.currentSystemName].list[0]
            this.parrafodos = this.system[this.currentSystemName].list[1]
            this.nombresistema = this.system[this.currentSystemName].name
            this.aliassistema = this.system[this.currentSystemName].alias
            this.imagensistema = this.system[this.currentSystemName].img2

            setTimeout(function(){

                _this.$router.push({
                    path: url
                })

                setTimeout(function(){
                    _this.Resize()
                    _this.$router.push({
                        path: url
                    })

                    _this.nav = false
                }, 250)

            }, 250)
            
        },
        conoceMas(){
            $('.main-nav ul li a:eq(3)').click()
        },
        conoceSistema(slug, part){
 
            var _this = this
            this.nav = true
            this.navsistema = true
            this.nombre_sistema = 0

            let index = _this.system.findIndex(x => x.slug == slug)
            let currCat = (this.currentCategory == null) ? 0 : this.currentCategory
            this.currentSystemName = index
            this.actualsistema = this.system[this.currentSystemName].slug
            this.titulosistema = this.system[this.currentSystemName].title
            this.subtitulosistema = this.system[this.currentSystemName].subtitle
            this.parrafouno = this.system[this.currentSystemName].list[0]
            this.parrafodos = this.system[this.currentSystemName].list[1]
            this.nombresistema = this.system[this.currentSystemName].name
            this.aliassistema = this.system[this.currentSystemName].alias
            this.imagensistema = this.system[this.currentSystemName].img2

            var url = '/tipos-de-sistemas-de-seguridad/' + this.type[this.currentType].slug + '/' + this.category[this.currentCategory].slug + '/' + this.system[this.currentSystemName].slug
            
            setTimeout(function(){
                _this.doorLeft()
                _this.$router.push({
                    path: url
                })
                this.Waypoint.destroyAll()
                _this.setWaypoint()
                //setTimeout(function(){
                    if(part){
                        _this.scrollToSection('#toyotas', 2000, url)
                    } else{
                        _this.scrollToSection('#seguridad', 1500, url)
                    }
                    
                    // _this.$router.push({
                    //     path: url
                    // })
                    // $.scrollTo($('#toyotas'), 1000)
                    _this.navsistema = false
                    //_this.nav = false
                //}, 200)
            }, 250)
            
        },
        homeVideos(){
            $('.main-nav ul li a:eq(1)').click()
        },
        homeSistemas(){
            $('.main-nav ul li a:eq(2)').click()
        },
        homeCompromiso(){
            $('.main-nav ul li a:eq(4)').click()
        },
        homeEstandares(){
            $('.main-nav ul li a:eq(5)').click()
        },
        Resize() {
            const _this = this
            var categoria,
            sistema,
            nombre_sistema,
            id,
            resizeTimer

            categoria = _this.$route.params.categoria,
            sistema = _this.$route.params.sistema,
            nombre_sistema = _this.$route.params.nombre,
            id = _this.$route.params.id

            if($(window).width()<768){
                $('#seguridad .prevencion .header, #seguridad .prevencion .body').removeAttr('style').removeClass('hidden').addClass('d-block')
                if($('#seguridad .left .gate').not(':visible')){
                    $('#seguridad .spacer').removeClass('d-block').addClass('hidden')
                }
            } else{
                if($('#seguridad .left .gate').is(':visible')){
                    $('#seguridad .spacer').removeClass('hidden').addClass('d-block')
                    $('#seguridad .prevencion .header, #seguridad .prevencion .body').removeClass('d-block').addClass('hidden')
                }
            }

            if(categoria=='tipos-de-sistemas-de-seguridad'){

                clearTimeout(resizeTimer)
                
                resizeTimer = setTimeout(function() {
                    var url

                    if(sistema!=undefined && id==undefined && nombre_sistema==undefined){
                        if($('#seguridad .left .gate').not(':visible')){
                            url = '/' + sistema
                        }
                    } else if(sistema!=undefined && id!=undefined && nombre_sistema==undefined){
                        if($('#seguridad .left .gate').not(':visible')){
                            url = '/' + sistema + '/' + id
                        }
                    } else if(sistema!=undefined && id!=undefined && nombre_sistema!=undefined){
                        if($('#seguridad .left .gate').not(':visible')){
                            url = '/' + sistema + '/' + id + '/' + nombre_sistema
                        }
                    } else {
                        url = ''
                    }

                    this.Waypoint.destroyAll()
                    _this.$router.push({
                        path: '/tipos-de-sistemas-de-seguridad' + url
                    })  

                    _this.setWaypoint()

                    if ($(window).width() > 767 && sistema==undefined && id==undefined && nombre_sistema==undefined) {
                        if(!_this.openGates){
                            _this.scrollToSection('#seguridad .left .gate', 0, '/tipos-de-sistemas-de-seguridad')
                        } else {
                            _this.scrollToSection('#seguridad', 0, '/tipos-de-sistemas-de-seguridad' + url)
                        }
                    } else {
                        _this.scrollToSection('#seguridad', 0, '/tipos-de-sistemas-de-seguridad' + url)
                    }
                    
                    let t=setTimeout(function(){

                        _this.$router.push({
                            path: '/tipos-de-sistemas-de-seguridad' + url
                        })

                        clearTimeout(t)
                        
                        _this.nav = false
                    
                    }, 1000)

                }, 250)

            } else {
                clearTimeout(resizeTimer)
                
                resizeTimer = setTimeout(function() {
                    
                    this.Waypoint.destroyAll()
                   _this. setWaypoint()

                    let t=setTimeout(function(){

                        clearTimeout(t)
                        _this.nav = false
                    
                    }, 1000)

               }, 250)
            }
        },
        scrollToSection(section, duration, url) {
            var _this = this
            var categoria = this.categoria
            var sistema = this.sistema

            $.scrollTo($(section), duration, {
                easing: 'easeInOutQuad',
                onAfter: function () {

                    _this.$router.push({
                        path: url
                    })
                    
                    setTimeout(function () {
                        switch(categoria){
                            case 'tipos-de-sistemas-de-seguridad':
                                   if(sistema!=undefined){
                                        let currentType = (sistema == "seguridad-de-prevencion") ? 0 : 1
                                        _this.currentType = currentType
                                        let anim = (currentType == 0) ? _this.doorLeft() : _this.doorRight()
                                    }
                                break
                        }
                        
                        _this.nav = false
                        
                    }, 1000)

                }
            })
        },
        setWaypoint(){
            const _this = this
            var categoria = this.categoria,
            sistema = this.sistema,
            nombre_sistema = this.nombre_sistema,
            id = this.id
            //para waypoint 3
            var el;
            if($(window).width()>767){
                if($('#seguridad .left .gate').is(':visible')){
                    el = document.querySelector('#seguridad .left .gate')
                } else {
                    el = document.getElementById('seguridad')
                }
            } else {
                el = document.getElementById('seguridad')
            }

            var waypoint0 = new Waypoint({
                element: document.getElementById('home'),
                handler: function (direction) {
                    if (_this.nav == false) {
                        $('.main-nav ul li a').removeClass('active').filter("[href='/']").addClass('active')
                        _this.$router.push({
                            path: '/'
                        })
                    }
                }
            })

            var waypoint1 = new Waypoint({
                element: document.getElementById('videos'),
                handler: function (direction) {
                    if (_this.nav == false) {
                        $('.main-nav ul li a').removeClass('active').filter("[href='/videos']").addClass('active')
                        _this.$router.push({
                            path: '/videos'
                        })
                    }
                }
            })

            var waypoint2 = new Waypoint({
                element: document.getElementById('sistemas'),
                handler: function (direction) {
                    if (_this.nav == false) {
                        $('.main-nav ul li a').removeClass('active').filter("[href='/sistemas-de-seguridad']").addClass('active')
                        _this.$router.push({
                            path: '/sistemas-de-seguridad'
                        })
                    }
                }
            })
            
            var waypoint3 = new Waypoint({
        
                element: el,
                handler: function (direction) {
                        if (_this.nav == false) {

                            let tsistema = _this.type[_this.currentType].slug
                            let tid =  _this.category[_this.currentCategory].slug
                            let tnombre_sistema = (_this.currentSystemName != null) ? _this.system[_this.currentSystemName].slug : undefined

                            $('.main-nav ul li a').removeClass('active').filter("[href='/tipos-de-sistemas-de-seguridad']").addClass('active')
                            
                            var url = ''

                            if(tsistema != '' && tid == '' && tnombre_sistema == undefined){
                                if($('#seguridad .left').css('display') == 'none'){
                                    url = '/' + tsistema
                                }
                            } else if(tsistema != '' && tid != '' && tnombre_sistema == undefined){
                                if($('#seguridad .left').css('display') == 'none'){
                                    url = '/' + tsistema + '/' + tid
                                }
                            } else if(tsistema != '' && tid != '' && tnombre_sistema != undefined){
                                if($('#seguridad .left').css('display') == 'none'){
                                    url = '/' + tsistema + '/' + tid + '/' + tnombre_sistema
                                }
                            } else {
                                url = ''
                                if($(window).width()<768){
                                    _this.systemTypes(0)
                                }
                            }

                            _this.$router.push({
                                path: '/tipos-de-sistemas-de-seguridad' + url
                            })
                        }
                    }
            })

            var waypoint4 = new Waypoint({
                element: document.querySelector('#compromiso .content'),
                handler: function (direction) {
                    if (_this.nav == false) {
                        $('.main-nav ul li a').removeClass('active').filter("[href='/nuestro-compromiso']").addClass('active')
                        _this.$router.push({
                            path: '/nuestro-compromiso'
                        })
                    }
                }
            })

            var waypoint5 = new Waypoint({
                element: document.getElementById('standares'),
                handler: function (direction) {
                    if (_this.nav == false) {
                        $('.main-nav ul li a').removeClass('active').filter("[href='/estandares-de-seguridad']").addClass('active')
                        _this.$router.push({
                            path: '/estandares-de-seguridad'
                        })
                    }
                }
            })

            var waypoint6 = new Waypoint({
                element: document.getElementById('faq'),
                handler: function (direction) {
                    if (_this.nav == false) {
                        $('.main-nav ul li a').removeClass('active').filter("[href='/preguntas-frecuentes']").addClass('active')
                        _this.$router.push({
                            path: '/preguntas-frecuentes'
                        })
                    }
                }
            })

            var waypoint7 = new Waypoint({
                element: document.getElementById('postventa'),
                handler: function (direction) {
                    if (_this.nav == false) {
                        $('.main-nav ul li a').removeClass('active').filter("[href='/postventa']").addClass('active')
                        _this.$router.push({
                            path: '/postventa'
                        })
                    }
                }
            })
        },
        async getCars() {
            const autos = await this.$axios.$get('/js/autos.json')
            this.cars = autos
        }
    },
    beforeDestroy() {
        //this.waypoint.destroy()
    }
}
</script>

<style>
/* @import '../static/css/normalize.css';
@import '../static/css/main.css';
@import '../static/css/component.css'; */

body {
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
