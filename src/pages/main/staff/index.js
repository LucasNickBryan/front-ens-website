import React, { useEffect, useState } from "react";
import "./styles.scss";
import Header from "../layout/header";
import BackgroundUrl from '../../../assets/images/imgs/header.JPG'
import FunctionServices from "../../../services/Function.services";
import PersonnelServices from "../../../services/Personnel.services";
import { IMAGE_PATH } from "../../../config/modules";
import DefautImage from "../../../assets/images/images.png";
import { Card } from "../ui/cards";
import Animation from "../../ui/Animation";

export default function Staff(){
    //personnel 😘😘
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
  
    //fonction data_ex20 😍😍
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
  
    //Peronnel + fonction 🤣🤣
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


    // const [data_ex2, setListFunction] = useState([]);
    // const [data_ex1, setListPerso] = useState([]);

    const [data_ex2, setListFunction] = useState(data_ex20);
    const [data_ex1, setListPerso] = useState(data_ex10);
    
    const [nbNiv1, setNbNiv1] = useState(0);
    const [rankR1, setRankR1] = useState([]);

    const [check, setCheck] = useState(true);

    var nbNiv = 0;
    var rankR = [];
  
    var data2 = [];
    var data1 = [];


    useEffect(() => {
      getListes();
      updateNiveau();
    }, []);

    function getListes(){
      FunctionServices.get().then(res =>{
        setListFunction(res.data);
        data2 = res.data;
      }, 
        err => {
            console.log("ERROR ", err.message);
        }
      )
  
      PersonnelServices.get().then(res =>{
        setListPerso(res.data);
        data1 = res.data;
      }, 
        err => {
            console.log("ERROR ", err.message);
        }
      )

      // setListFunction(data_ex20);
      // data2 = data_ex20;
      // setListPerso(data_ex10);
      // data1 = data_ex10;

      updateNiveau();
    }

    function updateNiveau(){
      var isany = 0;
      var efaVita = [];
      var efa = false;
  
      for (let i = 0; i < data_ex2.length; i++) {
        for (let j = 0; j < efaVita.length; j++) {
          if(data_ex2[i].rank === efaVita[j]){
            efa = true;
            break;
          }else{
  
          }
        }
  
        if(efa === false){
          var misy = false;
          for (let k = 0; k < data_ex1.length; k++) {
            if(data_ex1[k].Occupation.id === data_ex2[i].id){
              misy = true;
              break;
            }
          }

          if(misy === true){
            efaVita[isany] = data_ex2[i].rank;
            isany++;
          }
         
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

    function bigy(){
      var tabNiv = [];
      // alert(nbNiv1)
      for (let i = 0; i < nbNiv1; i++) {

          tabNiv[i] =
          <>
            <div className='level_fc'>
              <div className='title_level_fc'>
                Niveau {rankR1[i]}
                {/* Niveau {i} */}
              </div> 
                
              <div className='reste_level_fc'>
                {
                  data_ex1.map((ind,index)=>(
                    <div key={index} style={{}} >
                      {/* {rankR[i]} */}
                      {
                       ( Number(ind.Occupation.rank) === Number(rankR[i])) &&
                       
                       <Animation random={true}>
                        <Card image={ ind.avatar
                          ? IMAGE_PATH +
                          "/staffs/images/" +
                          ind.avatar
                          : // content.Picture.image
                          DefautImage}
                          
                          name={ind.name}
                          
                          occupation={ind.Occupation.name}/>
                        </Animation>

                      }
                    </div>
                  ))
                }
              </div>
  
            </div>
          </>;
      }
  
      // alert(nbNiv1)
  
      return tabNiv;
    }
    
  return (
    <div className="PERSO_STYLES">
      <Header BackgroundUrl={BackgroundUrl}>
        <div className="overlay">
          <div className="border p-3 title">
            <h1>Personnels</h1>
          </div>
        </div>
      </Header>

      <section>
      <div className="STAFF"> 

       
      <div className='hierarchie'>
        {
          bigy()
        }
      </div>

      </div>

      </section>
    </div>
  );
};
