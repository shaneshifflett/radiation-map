@radioactive: url('/Users/shaneshifflett/dev/work_scripts/radiation/map/rads.png');
@red-rad: url('/Users/shaneshifflett/dev/work_scripts/radiation/map/red-rads.png');
#new_id::glow-inner{
  line-color:#ae8;
  line-width:10;
  line-join:round;
  line-opacity:0.4;
}
#new_id::glow-innermiddle {
  line-color:#ae8;
  line-width:5;
  line-join:round;
  line-opacity:0.2;
}
#new_id::glow-outermiddle {
  line-color:#ae8;
  line-width:5;
  line-join:round;
  line-opacity:0.1;
}
#new_id::glow-outer {
  line-color:#ae8;
  line-width:2.5;
  line-join:round;
  line-opacity:0.05;
}


#new_id {
  line-color:#594;
  line-width:0.5;
  polygon-opacity:.1;
  polygon-fill:#ae8;

  polygon-pattern-file: @radioactive;

}

#past_id {
  line-color:#CDB380;
  line-width:0.5;
  polygon-opacity:.75;
  polygon-fill:#FF0000;
}

#past_id::glow-inner{
  line-color:#FF0000;
  line-width:5;
  line-join:round;
  line-opacity:0.4;
}
#past_id::glow-innermiddle {
  line-color:#FF0000;
  line-width:2.5;
  line-join:round;
  line-opacity:0.2;
}
#past_id::glow-outermiddle {
  line-color:#FF0000;
  line-width:2.5;
  line-join:round;
  line-opacity:0.1;
}
#past_id::glow-outer {
  line-color:#FF0000;
  line-width:2.5;
  line-join:round;
  line-opacity:0.05;
  polygon-pattern-file: @red-rad;
}