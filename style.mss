@land: #fff1cf;
@water: #C0E0F8;
@waterline: #8CE;
@serif:"Times New Roman Regular","FreeSerif Medium","DejaVu Serif Book";
Map {

}


#streets {
  line-width:.9;
  line-color:#E8DDCB;
  [zoom>14] { 
    text-name:'[STREETN_GC]';
    text-face-name:@serif;
    text-transform:uppercase;
    text-character-spacing:1;
    text-placement:line;
    text-line-spacing:4;
    text-size:10;
    text-wrap-width:120;
    text-allow-overlap:true;
    text-halo-radius:2;
    text-halo-fill:rgba(255,255,255,0.75);
  }
}

#areas {
  line-color:#594;
  line-width:0.5;
  polygon-opacity:0;
  polygon-fill:#ae8;
}
#buildings {
  line-color:#168;
  line-width:1;
  polygon-opacity:0;
  polygon-fill:#036564;
}
#neigh {
  line-color:#031634;
  line-width:0.5;
  polygon-opacity:1;
  polygon-fill:#031634;
}
