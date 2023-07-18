import React from "react";
// import Indexe from "./src/pages/main/layout/Index.js";
import image from "../../../../assets/images/Jonas.png";
import "./styles.scss";
import "w3-css/w3.css";

import MainNavbar from "../../layout/header";
import MainFooter from "../../layout/footer";

export const HomePage = () => {
  return (
    <div>
    <body id="home">
  
  {/* Page Navigation */}
  <nav className="navbar custom-navbar navbar-expand-lg navbar-dark" data-spy="affix" data-offset-top="20">
      <div className="container">
          <a className="navbar-brand" href="#">
              <img src="assets/imgs/logo.png" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <a className="nav-link" href="#home">Accueil</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#about">Historique</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#service">Club AENF </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#portfolio">A propos</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#team">Partenaires</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#testimonial">Actualités</a>
                  </li>
                  
                  <li className="nav-item">
                      <a className="nav-link" href="#contact">Nos contact</a>
                  </li>
                 
              </ul>
          </div>
      </div>
  </nav>
  {/* Farany Page Navigation */}

  {/* Page en-tête */}
  <header className="header">
      <div className="overlay">
          <h2>Université de Fianarantsoa</h2>
          <h3 className="title"> ENS Fianarantsoa</h3>
          <h4 className="subtitle">Association des Etudiants Normaliens Fianarantsoa  </h4>
          
          <div className="buttons text-center">
              <a href="#service" className="btn btn-primary rounded w-lg btn">Contactez nous</a>
              {/* <a href="#contact" className="btn btn-outline-light rounded w-lg btn-lg my-1">Contactez nous</a> */}
          </div>              
      </div>      
  </header>
  {/* End Of Page Header */}

      {/* About Section */}
  <section id="about">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-md-5 col-lg-4">
                  <img src="assets/imgs/about.png" className="w-100 img-thumbnail mb-3"/>
              </div>

              <div className="col-md-7 col-lg-8">
                  <h6 className="section-subtitle mb-0">AENF</h6>
                  <h6 className="section-title mb-3">Historique</h6>
                  <p>Association des Etudiants Normaliens Fianarantsoa (AENF).</p>
                  <p>_______________________________________________ </p>
                  <p>Araka ny fanadihadiana izay natao tamin'Andriamatoa Dr RATOVONJANAHARY Roger, Talen'ny ENS ny taona 2001-2007 dia nanamarina izy fa efa AENF no fiantso ny fikambanan'ny mpianatra teto amin'ny ENS.</p>
                  <p>Nohamafisin'Andriamatoa RANDRIANARIVELO Chef Service de la Scolarité ENS ihany koa izany araka ny antso nifanaovan'izy sy Dr Roger tamin'ny Talata 02 Jolay 2019 tokony tamin'ny ray ora tolakandro.</p>
                  <p>Tao arian'izay dia nambarany ihany koa fa tsy vohamarina ny fisian'ny sata hatramin'izay, satria raha ny tokony ho izy na misy izany dia tokony mipetraka mandrakariva eto amin'ny sekoly indrindra fa ny boky volamena.</p>
                  <p>Nasiany teny kosa anefa ny momba ny hira faneva sy ny namorona azy; araka ny tantara dia Andriamatoa TSIAVALIKY Célestin, fondateur ENS teo aloha no nampanao fifaninanana famoronana hira faneva ka nahazo laharana voalohany tamin'izany ny hira fanevan'ny ENS
                       (ENS sekoly ambony fianaranay...). Izay mbola ampiasaintsika kahatram'izao taona 2019 izao.</p>
                  <p>Raha zohina ny tantatra dia feno 40 tona amin'ny taona 2020 ny ENS. Nohon'ny fahafantaran ireo rehetra ireo dia niezakanamorona ny sata mefehy ny fikambanana sy ny fitsipika anatiny ary fitsipika natao
                       hifampifehezana ato amin'ny faritry ny ENS Fianarantsoa i Andriamatoa RAZAFIMAHATRATRA Jean de Dieu Gérard, Filohan'ny AENF tamin'ny taona 2017 - 2018, mpianatra mandalina manokana ny taranja matematika tato amin'ny sekoly.</p>
                       <p>Napetraka izany mba hitondra filaminana ho an'ny fikambanana ka  napidiriny tamin'ny fandaharan'asany ary mipetraka eo anivon'ny AENF sy ENS Fianarantsoa izany lalàna izany.</p>
              </div>
          </div>
      </div>
  </section>
  {/* End of About Section */}

  {/* About Section with bg */}
  <section className="has-bg-img py-md">
    <div className="back-ny">
      <div className="container text-center">
          <h6 className="section-subtitle">Assciation des Etudiants Normaliens Fianarantsoa</h6>
          <h6 className="section-title mb-6">La voie hiérarchique</h6>
          <div className="widget mb-4">
              <div className="widget-item">
                  <i className="ti-notepad"></i>
                  <h4>Admin</h4>
              </div>
              <div className="widget-item">
                  <i className="ti-layout"></i>
                  <h4>Pdt AENF</h4>
              </div>
              <div className="widget-item">
                  <i className="ti-filter"></i>
                  <h4>Délégués</h4>
              </div>
              <div className="widget-item">
                  <i className="ti-thumb-up"></i>
                  <h4>Etudiants</h4>
              </div>
          </div>
      </div>
    </div>
  </section>
  {/* End Of About Sectoin */}

  {/* Service Section */}
  <section id="service">
      <div className="container">
          <h6 className="section-subtitle text-center">Les clubs au sein de l'association </h6>
          <h5 className="section-title text-center mb-6">La majorité de ces Club sont instaurés par le Mandat de Président Adrien en 2021.  </h5> 
          <div className="row">
              <div className="col-sm-4 col-md-3">
                  <div className="card mb-4">
                      <div className="card-body">
                          <h2 className="mb-4"><i className="ti-filter text-primary"></i></h2>
                          <h6 className="card-title">NOMIA</h6>
                          <p>NOrmaliens MItory An-kira</p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4 col-md-3">
                  <div className="card mb-4">
                      <div className="card-body">
                          <h2 className="mb-4"><i className="ti-paint-roller text-primary"></i></h2>
                          <h6 className="card-title">INFORMATIQUES</h6>
                          <p>Présidé par Mr Marco L3 MATH</p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4 col-md-3">
                  <div className="card mb-4">
                      <div className="card-body">
                          <h2 className="mb-4"><i className="ti-ruler-pencil text-primary"></i></h2>
                          <h6 className="card-title">KABARY</h6>
                          <p>Présidé par Mr Arnolain L2 MATH</p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4 col-md-3">
                  <div className="card mb-4">
                      <div className="card-body">
                          <h2 className="mb-4"><i className="ti-layers text-primary"></i></h2>
                          <h6 className="card-title">DANSE</h6>
                          <p>Présidé par Mr Tokn L3 ST</p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4 col-md-3">
                  <div className="card mb-4">
                      <div className="card-body">
                          <h2 className="mb-4"><i className="ti-bolt text-primary"></i></h2>
                          <h6 className="card-title">FORMATION</h6>
                          <p>Présidé par Mr Thomas M1 PC</p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4 col-md-3">
                  <div className="card mb-4">
                      <div className="card-body">
                          <h2 className="mb-4"><i className="ti-palette text-primary"></i></h2>
                          <h6 className="card-title">Multimédia</h6>
                          <p>Présidé par le Président de l'ANF Mr Anicet</p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4 col-md-3">
                  <div className="card mb-4">
                      <div className="card-body">
                          <h2 className="mb-4"><i className="ti-stats-up text-primary"></i></h2>
                          <h6 className="card-title">iMatematiko</h6>
                          <p>Présidé par Mlle Valisoa</p>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4 col-md-3">
                  <div className="card mb-4">
                      <div className="card-body">
                          <h2 className="mb-4"><i className="ti-location-arrow text-primary"></i></h2>
                          <h6 className="card-title">THEATRALE</h6>
                          <p>Présidé Par Jeancia L2 SE P</p>
                      </div>
                  </div>
              </div>

          </div>  
      </div>
  </section>
  {/* End of Service Section */}

  {/* Portfolio section */}
  <section id="portfolio">
      <div className="container text-center">
          <h6 className="section-subtitle">Our Awesome Works</h6>
          <h6 className="section-title mb-5">Our Portfolio</h6>
          <div className="row">
              <div className="col-sm-4">
                  <div className="img-wrapper">
                      <img src="assets/imgs/folio-1.jpg"/>
                      <div className="overlay">
                          <div className="overlay-infos">
                              <h5>Project Title</h5>
                              <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                              <a href="javascript:void(0)"><i className="ti-link"></i></a>
                          </div>  
                      </div>
                  </div>
                  <div className="img-wrapper">
                      <img src="assets/imgs/folio-2.jpg" />
                      <div className="overlay">
                          <div className="overlay-infos">
                              <h5>Project Title</h5>
                              <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                              <a href="javascript:void(0)"><i className="ti-link"></i></a>
                          </div>                              
                      </div>
                  </div>                  
              </div>
              <div className="col-sm-4">
                  <div className="img-wrapper">
                      <img src="assets/imgs/folio-3.jpg"/>
                      <div className="overlay">
                          <div className="overlay-infos">
                              <h5>Project Title</h5>
                              <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                              <a href="javascript:void(0)"><i className="ti-link"></i></a>
                          </div>  
                      </div>
                  </div>
                  <div className="img-wrapper">
                      <img src="assets/imgs/folio-4.jpg"/>
                      <div className="overlay">
                          <div className="overlay-infos">
                              <h5>Project Title</h5>
                              <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                              <a href="javascript:void(0)"><i className="ti-link"></i></a>
                          </div>                              
                      </div>
                  </div>                  
              </div>
              <div className="col-sm-4">
                  <div className="img-wrapper">
                      <img src="assets/imgs/folio-5.jpg"/>
                      <div className="overlay">
                          <div className="overlay-infos">
                              <h5>Project Title</h5>
                              <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                              <a href="javascript:void(0)"><i className="ti-link"></i></a>
                          </div>  
                      </div>
                  </div>
                  <div className="img-wrapper">
                      <img src="assets/imgs/folio-6.jpg"/>
                      <div className="overlay">
                          <div className="overlay-infos">
                              <h5>Project Title</h5>
                              <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                              <a href="javascript:void(0)"><i className="ti-link"></i></a>
                          </div>                              
                      </div>
                  </div>                  
              </div>
          </div>
      </div>
  </section>
  {/* End of portfolio section */}

  {/* Team Section */}
  <section id="team">
      <div className="container">
          <h6 className="section-subtitle text-center">Meet With</h6>
          <h6 className="section-title mb-5 text-center">Our Angels</h6>
          <div className="row">
              <div className="col-sm-6 col-md-4">
                  <div className="card text-center mb-4">
                      <img className="card-img-top inset" src="assets/imgs/avatar.jpg"/>
                      <div className="card-body">
                          <h6 className="small text-primary font-weight-bold">FOUNDER</h6>
                          <h5 className="card-title">Matthew Davis</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                          <div className="socials">
                              <a href="javascript:void(0)"><i className="ti-facebook"></i> </a>
                              <a href="javascript:void(0)"><i className="ti-github"></i></a>
                              <a href="javascript:void(0)"><i className="ti-dropbox"></i></a>
                              <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-4">
                  <div className="card text-center mb-4">
                      <img className="card-img-top inset" src="assets/imgs/avatar-1.jpg"/>
                      <div className="card-body">
                          <h6 className="small text-primary font-weight-bold">CEO</h6>
                          <h5 className="card-title">Barbara Ross</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                          <div className="socials">
                              <a href="javascript:void(0)"><i className="ti-facebook"></i> </a>
                              <a href="javascript:void(0)"><i className="ti-github"></i></a>
                              <a href="javascript:void(0)"><i className="ti-dropbox"></i></a>
                              <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-4">
                  <div className="card text-center mb-4">
                      <img className="card-img-top inset" src="assets/imgs/avatar-2.jpg"/>
                      <div className="card-body">
                          <h6 className="small text-primary font-weight-bold">Designer</h6>
                          <h5 className="card-title">Karen Perry</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                          <div className="socials">
                              <a href="javascript:void(0)"><i className="ti-facebook"></i> </a>
                              <a href="javascript:void(0)"><i className="ti-github"></i></a>
                              <a href="javascript:void(0)"><i className="ti-dropbox"></i></a>
                              <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-4">
                  <div className="card text-center mb-4">
                      <img className="card-img-top inset" src="assets/imgs/avatar-3.jpg"/>
                      <div className="card-body">
                          <h6 className="small text-primary font-weight-bold">App Designer</h6>
                          <h5 className="card-title">Ashley Diaz</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                          <div className="socials">
                              <a href="javascript:void(0)"><i className="ti-facebook"></i> </a>
                              <a href="javascript:void(0)"><i className="ti-github"></i></a>
                              <a href="javascript:void(0)"><i className="ti-dropbox"></i></a>
                              <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-4">
                  <div className="card text-center mb-4">
                      <img className="card-img-top inset" src="assets/imgs/avatar-4.jpg"/>
                      <div className="card-body">
                          <h6 className="small text-primary font-weight-bold">Developer</h6>
                          <h5 className="card-title">Edward Harris</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                          <div className="socials">
                              <a href="javascript:void(0)"><i className="ti-facebook"></i> </a>
                              <a href="javascript:void(0)"><i className="ti-github"></i></a>
                              <a href="javascript:void(0)"><i className="ti-dropbox"></i></a>
                              <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-4">
                  <div className="card text-center mb-4">
                      <img className="card-img-top inset" src="assets/imgs/avatar-5.jpg"/>
                      <div className="card-body">
                          <h6 className="small text-primary font-weight-bold">photographer</h6>
                          <h5 className="card-title">Brian Scott</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                          <div className="socials">
                              <a href="javascript:void(0)"><i className="ti-facebook"></i> </a>
                              <a href="javascript:void(0)"><i className="ti-github"></i></a>
                              <a href="javascript:void(0)"><i className="ti-dropbox"></i></a>
                              <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </section>
  {/* End of Team Sectoin */}

  {/* Fatcs Section */}
  <section className="has-bg-img bg-img-2">
      <div className="container text-center">
          <h6 className="section-subtitle">We Are Awesome</h6>
          <h6 className="section-title mb-6">Some Fun Fucts</h6>
              <div className="widget-2">
                  <div className="widget-item">
                      <i className="ti-cup"></i>
                      <h6 className="title">100+</h6>
                      <div className="subtitle">Awards Won</div>
                  </div>
                  <div className="widget-item">
                      <i className="ti-face-smile"></i>
                      <h6 className="title">100+</h6>
                      <div className="subtitle">Happy Clients</div>
                  </div>
                  <div className="widget-item">
                      <i className="ti-blackboard"></i>
                      <h6 className="title">845+</h6>
                      <div className="subtitle">Project Completed</div>
                  </div>
                  <div className="widget-item">
                      <i className="ti-comments-smiley"></i>
                      <h6 className="title">15K+</h6>
                      <div className="subtitle">Comments</div>
                  </div>
              </div>
      </div>
  </section>

  {/* Testimonial Section */}
  <section id="testimonial">
      <div className="container">
          <h6 className="section-subtitle text-center">Testimonial</h6>
          <h6 className="section-title text-center mb-6">What Our Clients Says</h6>
          <div className="row">
              <div className="col-md-6">
                  <div className="testimonial-wrapper">
                      <div className="img-holder">
                          <img src="assets/imgs/avatar-5.jpg" />                     
                      </div>
                      <div className="body">
                          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                          <h6 className="title">Richard Reb</h6>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="testimonial-wrapper">
                      <div className="img-holder">
                          <img src="assets/imgs/avatar-6.jpg" />                     
                      </div>
                      <div className="body">
                          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
                          <h6 className="title">John Doe</h6>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  {/* End of Testimonial Section */}

  {/* Video Section */}
  <section className="has-bg-img py-lg">
      <div className="container text-center">

          {/* Button trigger modal */}
          <button type="button" className="btn btn-outline-primary play-control" data-toggle="modal" data-target="#exampleModalCenter">
            <i className="ti-control-play" ></i>
          </button>
          <h6 className="section-title mt-4">See Our Intro Video</h6>

      </div>
  </section>
  {/* End of Video Section */}

  {/* Modal */}
  <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
              <iframe width="100%" height="475" src="https://www.youtube.com/embed/TP4THzsAa3M" frameBorder="0" allowfullscreen></iframe>
          </div>
      </div>
  </div>
  {/* end of modal */}

  {/* Blog Section */}
  <section id="blog">
      <div className="container">
          <h6 className="section-subtitle text-center">News Feeds</h6>
          <h6 className="section-title mb-6 text-center">Our Blog</h6>

          <div className="row">
              <div className="col-md-4">
                  <div className="card blog-post my-4 my-sm-5 my-md-0">
                      <img src="assets/imgs/blog-1.jpg" />
                      <div className="card-body">
                          <div className="details mb-3">
                              <a href="javascript:void(0)"><i className="ti-comments"></i> 123</a>
                              <a href="javascript:void(0)"><i className="ti-eye"></i> 123</a>
                          </div>
                          <h5 className="card-title">Possimus aliquam veniam</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laudantium dolor nisi obcaecati, non laboriosam asperiores doloremque tempora repellendus iure!</p>
                          <a href="javascript:void(0)" className="d-block mt-3">Read More...</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card blog-post my-4 my-sm-5 my-md-0">
                      <img src="assets/imgs/blog-2.jpg" />
                      <div className="card-body">
                          <div className="details mb-3">
                              <a href="javascript:void(0)"><i className="ti-comments"></i> 434</a>
                              <a href="javascript:void(0)"><i className="ti-eye"></i> 987</a>
                          </div>
                          <h5 className="card-title">Repudiandae laudantium</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laudantium dolor nisi obcaecati, non laboriosam asperiores doloremque tempora repellendus iure!</p>
                          <a href="javascript:void(0)" className="d-block mt-3">Read More...</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card blog-post my-4 my-sm-5 my-md-0">
                      <img src="assets/imgs/blog-3.jpg" />
                      <div className="card-body">
                          <div className="details mb-3">
                              <a href="javascript:void(0)"><i className="ti-comments"></i> 164</a>
                              <a href="javascript:void(0)"><i className="ti-eye"></i> 425</a>
                          </div>
                          <h5 className="card-title">Laboriosam asperiores</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laudantium dolor nisi obcaecati, non laboriosam asperiores doloremque tempora repellendus iure!</p>
                          <a href="javascript:void(0)" className="d-block mt-3">Read More...</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  {/* End of Blog Section */}

  {/* Contact Section */}
  <section id="contact">
      <div className="container">
          <div className="contact-card">
              <div className="infos">
                  <h6 className="section-subtitle">Nous voilà</h6>
                  <h6 className="section-title mb-4">Contactez-nous</h6>

                  <div className="item">
                      <i className="ti-location-pin"></i>
                      <div className="">
                          <h5>Adresse</h5>
                          <p> UF, ENS Fianarantsoa </p>
                      </div>                          
                  </div>
                  <div className="item">
                      <i className="ti-mobile"></i>
                      <div>
                          <h5>Numéro Téléphone</h5>
                          <p>+261 34 22 777 45</p>
                      </div>                          
                  </div>
                  <div className="item">
                      <i className="ti-email"></i>
                      <div className="mb-0">
                          <h5> Address E-mail</h5>
                          <p>aenf2023@gmail.com</p>
                      </div>
                  </div>
                  <div className="item">
                      <i className="ti-world"></i>
                      <div className="mb-0">
                          <h5>Plus d'information</h5>
                          <p>info@aenf.org</p>
                      </div>
                  </div>
              </div>
              <div className="form">
                  <h6 className="section-subtitle">Disponible 24h/24h</h6>
                  <h6 className="section-title mb-4">Laissez votre message</h6>
                  <form>
                      <div className="form-group">
                          <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adrsse e-mail" required/>
                      </div>
                      <div className="form-group">
                          <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Mot de passe" required/>
                      </div>
                      <div className="form-group">
                          <textarea name="contact-message" id="" cols="30" rows="7" className="form-control form-control-lg" placeholder="Message"></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary btn-block btn-lg mt-3">Envoie</button>
                  </form>
              </div>
          </div>
      </div>
  </section>
  {/* Contact Section */}

  <section className="has-bg-img py-0">
      <div className="container">
          <div className="footer">
              <div className="footer-lists">
                  <ul className="list">
                      <li className="list-head">
                          <h6 className="font-weight-bold">ABOUT US</h6>
                      </li>
                      <li className="list-body">
                          <a href="#" className="logo">
                              <img src="assets/imgs/logo.png"/>
                              <h6>Creative Studio</h6>
                          </a>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nobis fugit maxime deleniti minus optio accusamus, quam maiores explicabo sunt.</p> 
                          <p className="mt-3">
                              Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a className="d-inline text-primary" href="http://www.devcrud.com">DevCRUD</a>
                          </p>                   
                      </li>
                  </ul>
                  <ul className="list">
                      <li className="list-head">
                          <h6 className="font-weight-bold">USEFUL LINKS</h6>
                      </li>
                      <li className="list-body">
                          <div className="row">
                              <div className="col">
                                  <a href="#about">About</a>
                                  <a href="#service">Service</a>
                                  <a href="#portfolio">Portfolio</a>
                                  <a href="#testmonail">Testimonial</a>
                              </div>
                              <div className="col">
                                  <a href="#team">Team</a>
                                  <a href="#blog">Blog</a>
                                  <a href="#">Faq</a>
                                  <a href="#">Privacy Policy</a>                  
                              </div>
                          </div>
                      </li>
                  </ul>
                  <ul className="list">
                      <li className="list-head">
                          <h6 className="font-weight-bold">CONTACT INFO</h6>
                      </li>
                      <li className="list-body">
                          <p>Contact us and we'll get back to you within 24 hours.</p>
                          <p><i className="ti-location-pin"></i> 12345 Fake ST NoWhere AB Country</p>
                          <p><i className="ti-email"></i>  info@website.com</p>
                          <div className="social-links">
                              <a href="javascript:void(0)" className="link"><i className="ti-facebook"></i></a>
                              <a href="javascript:void(0)" className="link"><i className="ti-twitter-alt"></i></a>
                              <a href="javascript:void(0)" className="link"><i className="ti-google"></i></a>
                              <a href="javascript:void(0)" className="link"><i className="ti-pinterest-alt"></i></a>
                              <a href="javascript:void(0)" className="link"><i className="ti-instagram"></i></a>
                              <a href="javascript:void(0)" className="link"><i className="ti-rss"></i></a>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>    
      </div>
  </section>

  {/* core  
  <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
  <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>
  bootstrap affix 
  <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script> 

  Creative Studio js 
  <script src="assets/js/creative-studio.js"></script>
  */}

 

</body>
</div>
  );
};
