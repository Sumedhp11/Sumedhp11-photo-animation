let activeindex = 0;
const groups = document.getElementsByClassName("card-group");

const handleloveclick = () => {
    const nextindex = activeindex + 1 <= groups.length - 1 ? activeindex + 1 : 0;

    const currentgroup = document.querySelector(`[data-index= "${activeindex}"]`),
     nextgroup = document.querySelector(`[data-index= "${nextindex}"]`);


     currentgroup.dataset.status = "after";

     nextgroup.dataset.status = "becoming-active-from-before";
     setTimeout(()=>{
        nextgroup.dataset.status = "active";
        activeindex = nextindex;
     });
}

const handlehateclick = () => {
    const nextindex = activeindex - 1 >= 0 ? activeindex - 1 : groups.length - 1;
    
    const currentGroup = document.querySelector(`[data-index="${activeindex}"]`),
          nextGroup = document.querySelector(`[data-index="${nextindex}"]`);
    
    currentGroup.dataset.status = "before";
    
    nextGroup.dataset.status = "becoming-active-from-after";
    
    setTimeout(() => {
      nextGroup.dataset.status = "active";
      activeindex = nextindex;
    });
  }

