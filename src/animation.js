export const pageAnimation ={
    hidden :{
        opacity:0,
        y:300
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
            when:'beforeChildren',
            staggerChildren:0.25,
        },
    },
    exit:{
        opacity:0,
        y:300,
        transition:{
            duration:0.5,
        },
    }
}

export const titleAnim = {
        hidden:{y:200,opacity:0},
        show:{y:0,opacity:1,transition:{duration:1.5,ease:"easeOut",}},
    }
export const container = {
        hidden:{x:100},
        show:{x:0,transition:{duration:1,ease:'easeOut',staggerChildren:0.75}}
    }
export const fade ={
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{ease :"easeOut",
                    duration:3}
    }
}
export const photoAnim ={
    hidden:{scale:1.5,opacity:0},
    show:{
        scale:1,
        opacity:1,
        transition:{
            ease:'easeOut',
            duration:0.75,
        }
    }
}
export const lineAnim={
    hidden:{width:'0%'},
    show:{
        width:'100%',
        transition:{duration:1}
    }
}
export const slider ={
    hidden:{x:'-130%',skew:'45deg'},
    show:{
        x:'100%',
        skew:'0deg',
        transition:{ease:'easeOut',duration:1}
    }
}
export const sliderContainer ={
    hidden:{opacity:1},
    show:{opcity:1,transition:{staggerChildren:0.1,ease:'easeOut'}}

}
export const reveal = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 1,
      },
    },
  };
  
  export const swoopAdoop ={
    hidden:{width:"-20%",transition:{duration:1}},
    show:{
        width:"100%",
        transition:{ease:'easeOut',duration:1}
    }
}