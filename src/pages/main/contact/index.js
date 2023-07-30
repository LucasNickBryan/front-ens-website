import React, { useEffect } from "react";
import Header from "../layout/header";
import BackgroundUrl from '../../../assets/images/imgs/header.JPG'
import './styles.scss'
import Animation from '../../ui/Animation';
import { useForm } from "react-hook-form";
import { RequiredStar, RequiredText } from "../../admin/ui/texts";
import { pattern } from "../../sign-in";

const Contact = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      message: '',
    }
  })

  const onSubmit = (values) => {
    const data = {
      email: values.email,
      message: values.message,
    }
    // console.log("MESSAGE ", data);
  }

  return (
    <div className="CONTACT_STYLES">
      <Header BackgroundUrl={BackgroundUrl}>
        <div className="overlay">
          <div className="border p-3 title">
            <h1>Contactez-nous</h1>
          </div>
        </div>
      </Header>

      {/* Contact Section */}
      <section id="contact">
        <Animation animate="fade-down-left">
          <div className="container">
            <div className="contact-card !rounded-xl">
              <div className="infos">
                <div className="bg-greencolor py-2 px-4 mb-4">
                  <h6 className="text-white">Nous voilà</h6>
                  <h6 className="section-title text-white">Contactez-nous</h6>
                </div>
                <div className="px-4">
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
                      <h5>Téléphone</h5>
                      <p>+261 34 22 777 45</p>
                    </div>
                  </div>
                  <div className="item">
                    <i className="ti-email"></i>
                    <div className="mb-0">
                      <h5> Email</h5>
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
              </div>
              <div className="form">
                <div className="bg-greencolor py-2 px-4 mb-4">
                  <h6 className="text-white">Disponible 24h/24h</h6>
                  <h6 className="section-title text-white">Laissez-nous votre message</h6>
                </div>
                <form className="px-4" noValidate onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <span className="text-lg">Votre email <RequiredStar /></span>
                    <div className="form-group shadow-md">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="exemple@gmail.com"
                        {...register("email", { required: true, pattern: pattern })}
                      />
                    </div>
                    {errors.email && <RequiredText />}
                  </div>
                  <div className="mb-3">
                    <span className="text-lg">Votre message</span>
                    <div className="form-group shadow-md">
                      <textarea
                        name="contact-message"
                        cols="30"
                        rows="7"
                        className="form-control form-control-lg"
                        placeholder="Exprimez-vous"
                        {...register("message", { required: true })}
                      ></textarea>
                    </div>
                    {errors.message && <RequiredText />}
                  </div>
                  <button
                    type="submit"
                    className="mt-3 p-2  w-full text-greencolor !border border-greencolor rounded hover:bg-greencolor hover:text-white transition-all delay-100"
                  >
                    Envoie
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Animation>
      </section>
      {/* Contact Section */}
    </div>
  );
};

export default Contact;
