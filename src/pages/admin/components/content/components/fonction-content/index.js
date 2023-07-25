import React, { useState, useEffect } from 'react'
import './style.scss';
import './styleHierarchie.scss';
import { Input } from '../../../../ui/input';
import FunctionServices from '../../../../../../services/Function.services';
import PersonnelServices from '../../../../../../services/Personnel.services';
import DefautImage from "../../../../../../assets/icons/image.png";
import { IMAGE_PATH } from '../../../../../../config/modules';

export const FonctionContent = () => {

  //personnel
  var data_ex3 = [
    {
      id: 1,
      name: "vin blanc",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      functionId: "1",
    },
    {
      id: 2,
      name: "vin rouge",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      functionId: "1",
    },
    {
      id: 3,
      name: "vintsika",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      functionId: "2",
    },
    {
      id: 4,
      name: "vin blanc",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      functionId: "1",
    },
    {
      id: 5,
      name: "vin rouge",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      functionId: "1",
    },
    {
      id: 6,
      name: "vintsika",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      functionId: "2",
    },
    {
      id: 7,
      name: "vin blanc",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      functionId: "1",
    },
    {
      id: 8,
      name: "vin rouge",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      functionId: "1",
    },
    {
      id: 9,
      name: "vintsika",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      functionId: "2",
    },
  ];

  //fonction data_ex20
  var data_ex20 = [
    {
      id: 1,
      name: "president",
      rank: "0",
    },
    {
      id: 2,
      name: "vice-president",
      rank: "4",
    },
    {
      id: 3,
      name: "delegue",
      rank: "2",
    },
    {
      id: 4,
      name: "coordo",
      rank: "3",
    },
    {
      id: 5,
      name: "emitech",
      rank: "3",
    },
  ];

  //Peronnel + fonction
  var data_ex10 = [
    {
      id: 1,
      name: "RASATAHARISOA Francky",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      occupationId: "1",
      Occupation: {
        id: 1,
        name: "president",
        rank: "0",
      },
    },
    {
      id: 2,
      name: "vin rouge",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      occupationId: "1",     
      Occupation: {
        id: 1,
        name: "vice",
        rank: "0",
      },
    },
    {
      id: 3,
      name: "vintsika",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      occupationId: "2",
      Occupation: {
        id: 2,
        name: "vice",
        rank: "4",
      },
    },
    {
      id: 4,
      name: "vin blanc",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      occupationId: "3",
      Occupation: {
        id: 3,
        name: "coordo",
        rank: "2",
      },
    },
    {
      id: 5,
      name: "vin rouge",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      occupationId: "1",
      Occupation: {
        id: 1,
        name: "president",
        rank: "3",
      },
    },
    {
      id: 6,
      name: "vintsika",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      occupationId: "2",
      Occupation: {
        id: 1,
        name: "president",
        rank: "2",
      },
    },
    {
      id: 7,
      name: "vin blanc",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      occupationId: "1",
      Occupation: {
        id: 1,
        name: "president",
        rank: "2",
      },
    },
    {
      id: 8,
      name: "vin rouge",
      avatar: "test",
      description: "test desc",
      year: "2022-2023",
      occupationId: "1",
      Occupation: {
        id: 1,
        name: "president",
        rank: "2",
      },
    },
  ];

  const [recherche, setRecherche] = useState('');
  const [modeSelection, setModeSelection] = useState(false);

  const [idFonction, setIdFonction] = useState(-1);
  const [nomFonction, setNomFonction] = useState('');
  const [rangFonction, setRangFonction] = useState(0);
  const [isAdd, setIsAdd] = useState(false);

  const [data_ex2, setListFunction] = useState([]);
  const [data_ex1, setListPerso] = useState([]);
  
  const [nbNiv1, setNbNiv1] = useState(0);
  const [rankR1, setRankR1] = useState([]);

  var nbNiv = 0;
  var rankR = [];

  var data2 = [];
  var data1 = [];

  
  useEffect(() => {
    getListes();
  }, []);

  function getListes(){
    FunctionServices.get().then(res =>{
      setListFunction(res.data);
      data2 = res.data;
      updateNiveau();
    }, 
      err => {
          console.log("ERROR ", err.message);
      }
    )

    PersonnelServices.get().then(res =>{
      setListPerso(res.data);
      data1 = res.data;
      // console.log(res.data)
    }, 
      err => {
          console.log("ERROR ", err.message);
      }
    )
  }

  function updateNiveau(){
    var isany = 0;
    var efaVita = [];
    var efa = false;

    for (let i = 0; i < data2.length; i++) {
      for (let j = 0; j < efaVita.length; j++) {
        if(data2[i].rank === efaVita[j]){
          efa = true;
          break;
        }else{

        }
      }

      if(efa === false){
        efaVita[isany] = data2[i].rank;
        isany++;
      }

     efa = false;      
    }

    //Classement par ordre de rang
    var c = 0; var tmp = 0;
    while(c<isany){
      for (let i = 0; i < isany; i++) {
        if(Number(efaVita[i])>Number(efaVita[c])){
          tmp = efaVita[i]
          efaVita[i] = efaVita[c];
          efaVita[c] = tmp;
        }
      }
      c++;
    }

    nbNiv = isany;
    setNbNiv1(nbNiv);
    rankR = efaVita;
    setRankR1(efaVita);
  }


  function modeSelec(e, id_html, id_fun){
    var elements = document.getElementsByClassName('full_p_fc');
    for (var i = 0; i < elements.length; i++) { 
      elements[i].className = "full_p_fc";
    }
    var me = document.getElementById("full"+id_html);

    if(modeSelection === false){
      setModeSelection(true);
    }else{
      setModeSelection(false);
    }
    me.className = "full_p_fc sec_fc";

    //Colorie les elements principaux
    var elements2 = document.getElementsByClassName('card_fc');
    for (var i = 0; i < elements2.length; i++) { 
      elements2[i].className = "card_fc";
    }
    var me2 = document.getElementById("card"+id_html);
    me2.className = "card_fc sec2_fc";

    //Colorie les fonctions
    var elements3 = document.getElementsByClassName('fun_p_fc');
    for (var i = 0; i < elements3.length; i++) { 
      elements3[i].className = "fun_p_fc";
    }

    var elements4 = document.getElementsByClassName('bt_change_fc');
    for (var i = 0; i < elements4.length; i++) { 
      elements4[i].className = "bt_change_fc";
      elements4[i].style.height = "auto";
      elements4[i].style.animation = "clignoter 1s infinite";
    }

    var me2 = document.getElementById("fun"+id_fun);
    me2.className = "fun_p_fc sec3_fc";
    document.getElementById("cha"+id_fun).className = "bt_change_fc";
    document.getElementById("cha"+id_fun).style.height = "0";

    // console.log(c.querySelectorAll('.childClass'));
  }

  function openM(e){
    init();
    setIsAdd(true);
    var me = document.getElementById("form_fc");
    if(me.className === "form_fc active_form_fc"){
    me.className = "form_fc desactive_form_fc";
    }else{
    me.className = "form_fc active_form_fc";
    }
    non(e);
  }

  function newFonction(e){
    var me = document.getElementById("form_fc");
    me.className = "form_fc active_form_fc";
    setNomFonction("");
    setRangFonction(0);

  }

  function setForm(e,nom,rang,id){
    setIsAdd(false);
    var me = document.getElementById("form_fc");
    me.className = "form_fc active_form_fc";
    setNomFonction(nom);
    setRangFonction(rang);
    setIdFonction(id);
  }

  function perso(p){
    var ls = "";
    try{
    ls = <>
        <div className='full_p_fc' id={"full"+p.id} onClick={(e) => modeSelec(e,""+p.id,""+p.Occupation.id)}>
          {p.name}
          <br></br>
          {p.Occupation.id}
          
        </div>
      </>
    }catch(e){
    ls = <>
      <div className='full_p_fc' id={"full"+p.id} onClick={(e) => modeSelec(e,""+p.id,0)}>
        {p.name}
        <br></br>
        {0}
        
      </div>
    </>
    }

    return ls;
  }

  function fonction(p){
    var ls = <>
        <div className='fun_p_fc' id={"fun"+p.id} onClick={(e) => setForm(e,p.name,p.rank,p.id)}>
          <div className='head_fc'> {p.name}
          <br></br>
          Niveau: {p.rank}
          </div>
          <div className='foot_fc'>
            <button className='bt_change_fc' style={{height: "0px", padding: "0"}} id={"cha"+p.id}>Changer</button>
          </div>
          
        </div>
      </>

    return ls;
  }

  function persoFonction(p){
    var ls = <>
        <div className='card_fc' id={"card"+p.id} >
          <div className='card_sary_fc'>
                <img
                    src={
                      p.avatar
                        ? IMAGE_PATH +
                        "/staffs/images/" +
                        p.avatar
                        : // content.Picture.image
                        DefautImage
                    }
                    className=""
                    alt=""
                  />
          </div>
          <div className='card_footer_fc'>
            <div className='fun_card_fc'><b>{p.Occupation.name}</b></div>
            <div className='name_card_fc'>{p.name}</div>
            <div className='des_card_fc'>{p.description}</div>
           
          </div>
        </div>
      </>;



    return ls;
  }

  function enregistrer(e){

    if(isAdd === true){
      //ato ny add
      var formData = new FormData();
      formData.append('name', nomFonction);
      formData.append('rank', rangFonction);

      FunctionServices.post(formData);
      getListes();
      init();
    }else{
      var elements = document.getElementsByClassName('22_fc');
      for (var i = 0; i < elements.length; i++) { 
        elements[i].style.display = "block";
      }

      var elements2 = document.getElementsByClassName('11_fc');
      elements2[0].style.display = "none";

      var elements0 = document.getElementsByClassName('44_fc');
      elements0[0].style.display = "none";
    }
  }

  function supprimer(e){

      var elements = document.getElementsByClassName('33_fc');
      for (var i = 0; i < elements.length; i++) { 
        elements[i].style.display = "block";
      }

      var elements2 = document.getElementsByClassName('11_fc');
      elements2[0].style.display = "none";

      var elements0 = document.getElementsByClassName('44_fc');
      elements0[0].style.display = "none";

  }

  function oui2(e){
    //ato ny supprimer
    var elements = document.getElementsByClassName('33_fc');
    for (var i = 0; i < elements.length; i++) { 
      elements[i].style.display = "none";
    }

    var elements2 = document.getElementsByClassName('44_fc');
    elements2[0].style.display = "block";

    FunctionServices.delete(idFonction);

    getListes();
    init();
  }

  function non2(e){
    var elements = document.getElementsByClassName('33_fc');
    for (var i = 0; i < elements.length; i++) { 
      elements[i].style.display = "none";
    }

    var elements2 = document.getElementsByClassName('11_fc');
    elements2[0].style.display = "block";

    var elements0 = document.getElementsByClassName('44_fc');
    elements0[0].style.display = "block";
  }

  function oui(e){
    //ato ny update
    var elements = document.getElementsByClassName('22_fc');
    for (var i = 0; i < elements.length; i++) { 
      elements[i].style.display = "none";
    }

    var elements2 = document.getElementsByClassName('11_fc');
    elements2[0].style.display = "block";

    var elements0 = document.getElementsByClassName('44_fc');
    elements0[0].style.display = "block";

    var formData = new FormData();
    formData.append('name', nomFonction);
    formData.append('rank', rangFonction);

    FunctionServices.put(idFonction,formData);

    getListes();
    init();
  }

  function non(e){
    var elements = document.getElementsByClassName('22_fc');
    for (var i = 0; i < elements.length; i++) { 
      elements[i].style.display = "none";
    }

    var elements2 = document.getElementsByClassName('11_fc');
    elements2[0].style.display = "block";

    var elements2 = document.getElementsByClassName('44_fc');
    elements2[0].style.display = "block";
  }

  function bigy(){
    var tabNiv = [];
    for (let i = 0; i < nbNiv1; i++) {
        tabNiv[i] =
        <>
          <div className='level_fc'>
            <div className='title_level_fc'>
              Niveau {rankR1[i]}
            </div>
              
            <div className='reste_level_fc'>
              {
                data_ex1.map((ind) => {
                  if(Number(ind.Occupation.rank) === Number(rankR1[i])){
                    {return persoFonction(ind)}
                  }
                  
                })
              }
            </div>

          </div>
        </>;
    }

    // alert(nbNiv1)

    return tabNiv;
  }

  function init(){
    setModeSelection(false);
    setNomFonction("");
    setRangFonction(0);
    setIdFonction(-1);

    var elements = document.getElementsByClassName('full_p_fc');
    for (var i = 0; i < elements.length; i++) { 
      elements[i].className = "full_p_fc";
    }

    //Colorie les elements principaux
    var elements2 = document.getElementsByClassName('card_fc');
    for (var i = 0; i < elements2.length; i++) { 
      elements2[i].className = "card_fc";
    }

    //Colorie les fonctions
    var elements3 = document.getElementsByClassName('fun_p_fc');
    for (var i = 0; i < elements3.length; i++) { 
      elements3[i].className = "fun_p_fc";
    }

    

    var elements4 = document.getElementsByClassName('bt_change_fc');
    for (var i = 0; i < elements4.length; i++) { 
      elements4[i].className = "bt_change_fc";
      elements4[i].style.height = "0";
      elements4[i].style.animation = "clignoter 1s infinite";
    }


    // console.log(c.querySelectorAll('.childClass'));
  }

  function openM(e){
    init();
    setIsAdd(true);
    var me = document.getElementById("form_fc");
    if(me.className === "form_fc active_form_fc"){
    me.className = "form_fc desactive_form_fc";
    }else{
    me.className = "form_fc active_form_fc";
    }
    non(e);

  }

  

  return (
    <>
      {/* <div>FonctionContent</div> */}

      <div className='main_fc'>
        
        <div className='liste_personel_fc'>
          <div>Personnel</div>
          <div className='search_p_fc'>
            <div>
              <Input value={recherche}  onChange={e => setRecherche(e.target.value)} />
            </div>
            {/* <div>Liste personnel:</div> */}

          </div>
          <div className='data_p_fc'>
            {
              data_ex1.map((ind) => {
                {return perso(ind)}
              })
            }
          </div>
        </div>

        <div className='liste_fonction_fc'>
          <div>Fonction</div>
          <div className='search_p_fc'>
            <div>
              <Input value={recherche}  onChange={e => setRecherche(e.target.value)} />
            </div>
            {/* <div>Liste personnel:</div> */}

          </div>
          <div className='data_p_fc'>
            {
              data_ex2.map((ind) => {
                {return fonction(ind)}
              })
            }
          </div>
        </div>


        <div className='space_work_fc'>
          <div className='form_fc desactive_form_fc' id='form_fc'>
              <div className='inside_fc'>
              <button onClick={(e) => openM(e)} style={{border: "2px solid grey", paddingLeft: "10px", paddingRight: "10px"}}>X</button>
              
              <h3><b>Formulaire fonction</b></h3><br></br>
              <p>Nom de la fonction</p>
              <Input value={nomFonction}  onChange={e => setNomFonction(e.target.value)} />
              
              <p>Rang de la fonction</p>
              <Input value={rangFonction} type="number"  onChange={e => setRangFonction(e.target.value)} />
                <button className='btn_fc 11_fc' style={{float: "right", display: "block"}} onClick={(e) => enregistrer(e)}>Enregistrer</button>
                
                <button className='btn_fc 44_fc' style={{float: "right", display: "block", backgroundColor: "grey", color: "white"}} onClick={(e) => supprimer(e)}>Supprimer</button>
                
                <button className='btn_fc 33_fc' style={{float: "right", width: "64px", display: "none", marginLeft: "20px"}}
                onClick={(e) => oui2(e)}>Oui</button>
                <button className='btn_fc 33_fc' style={{float: "right", width: "64px", display: "none", marginLeft: "20px"}}
                onClick={(e) => non2(e)}>Non</button>

                <p className='22_fc' style={{display: "none", color: "red"}}>Vous êtes sûre de vouloir modifier?</p>
                <button className='btn_fc 22_fc' style={{float: "right", width: "64px", display: "none", marginLeft: "20px"}}
                onClick={(e) => oui(e)}>Oui</button>
                <button className='btn_fc 22_fc' style={{float: "right", width: "64px", display: "none", marginLeft: "20px"}}
                onClick={(e) => non(e)}>Non</button>
              </div>
          </div>

          <button className='btn_fc' onClick={(e) => openM(e)}> + Ajouter une fonction</button>
            <div className='hierarchie'>
              {
                bigy()
              }
            </div>
           
        
        </div>

        <div className='footer_fc'>

        </div>
      </div>
    </>

  )
}
