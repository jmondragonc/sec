<template>
    <!-- HEADER -->
    <header class="container-fluid header m-0 p-0">
        <div class="row top-header m-0 p-0">
            <div class="col-md-12">
                <div class="text-right">
                    <p>
                        <a href="tel:+51080000669">LÍNEA GRATUITA 0800-00669</a>
                    </p>
                    <ul class="inline">
                        <li class="toyota">
                            <a
                  target="_blank"
                  href="http://www.toyota-global.com"
                  data-ga="header/toyota-global"
                >
                  <img src="~/static/img/icon-1.png">
                </a>
                        </li>
                        <li class="lexus">
                            <a
                  target="_blank"
                  href="http://www.lexusperu.com.pe/es.html"
                  data-ga="header/lexusperu"
                >
                  <img src="~/static/img/icon-2.png">
                </a>
                        </li>
                        <li>
                            <a target="_blank" href="http://www.hinoperu.com.pe" data-ga="header/instagram">
                  <img src="~/static/img/icon-3.png">
                </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <b-navbar toggleable="lg" type="light" class="top-navbar">
            <b-navbar-brand href="#">
                <img class="logo img-fluid d-sm-block" src="~/static/img/logo.png">
        </b-navbar-brand>
                <b-navbar-toggle target="nav_collapse" style="justify-content: flex-end"></b-navbar-toggle>

                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <b-nav-item-dropdown right>
                            <template slot="button-content">Escoge tu Toyota</template>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/listado-modelos-toyota" data-ga="header/escoge-tu-toyota/listado-modelos-toyota">
                                <span>MODELOS</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/escoge-tu-toyota" data-ga="header/escoge-tu-toyota/escoge-tu-toyota">
                                <span>COMPARAR MODELOS</span>
                            </b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right class="compra-tu-toyota">
                            <template slot="button-content">Compra tu Toyota</template>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/concesionarios-toyota" data-ga="header/compra-tu-toyota/concesionarios-toyota">
                                <span>concesionarios</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/planes-financiamiento-de-autos-toyota" data-ga="header/compra-tu-toyota/planes-financiamiento-de-autos-toyota">
                                <span>financiamiento</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/cotizador" data-ga="header/compra-tu-toyota/cotizador">
                                <span>Cotizar</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/condiciones-vigencia-garantia" data-ga="header/compra-tu-toyota/condiciones-vigencia-garantia">
                                <span>Garantía</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/programa-de-posventa" data-ga="header/compra-tu-toyota/programa-de-posventa">
                                <span>Posventa</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/prueba-de-manejo" data-ga="header/compra-tu-toyota/prueba-de-manejo">
                                <span>Prueba de manejo</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/por-que-elegir-un-toyota" data-ga="header/compra-tu-toyota/por-que-elegir-un-toyota">
                                <span>Por qué elegir un Toyota</span>
                            </b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right class="novedades">
                            <template slot="button-content">Novedades</template>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/ofertas-y-promociones" data-ga="header/novedades/promociones">
                                <span>Promociones</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/noticias" data-ga="header/novedades/noticias">
                                <span>Noticias</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/eventos" data-ga="header/novedades/eventos">
                                <span>Eventos</span>
                            </b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right class="quienes-somos">
                            <template slot="button-content">Quiénes somos</template>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/historia#historia" data-ga="header/quienes-somos/historia">
                                <span>Historia</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/historia#mision" data-ga="header/quienes-somos/mision">
                                <span>Misión</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/historia#vision" data-ga="header/quienes-somos/vision">
                                <span>Visión</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/historia#filosofia" data-ga="header/quienes-somos/filosofia">
                                <span>Filosofía</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/historia#valores" data-ga="header/quienes-somos/valores">
                                <span>Valores</span>
                            </b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right class="contactanos">
                            <template slot="button-content">Contáctanos</template>
                            <b-dropdown-item href="tel:+51080000669">
                                <span>Línea gratuita 0800-00669</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/llamado-revision" data-ga="footer/contactenos/llamado-revision">
                                <span>Llamado a revisión</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/contacto/consultas" data-ga="footer/contactenos/consultas">
                                <span>Consultas</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/contacto/reclamos" data-ga="footer/contactenos/reclamos">
                                <span>Reclamos</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="https://www.toyotaperu.com.pe/preguntas-frecuentes" data-ga="footer/contactenos/preguntas-frecuentes">
                                <span>Preguntas frecuentes</span>
                            </b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right class="innovacion">
                            <template slot="button-content">Innovación</template>
                            <b-dropdown-item href="https://toyotaperu.com.pe/seguridad" data-ga="header/innovacion/seguridad">
                                <span>Seguridad Toyota</span>
                            </b-dropdown-item>
                            <b-dropdown-item href="http://www.goblue.pe" data-ga="header/innovacion/hibridos">
                                <span>Híbridos</span>
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
        </b-navbar>
    </header>
    <!-- END HEADER -->
</template>
<style>
@import '../static/css/normalize.css';
@import '../static/css/main.css';
@import '../static/css/component.css';

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
