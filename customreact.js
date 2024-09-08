
const box=document.getElementById("box");

const data={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:'click me to visit google'
}

function customrender(data,box){
    /*
    const domElement=document.createElement(data.type);
    domElement.innerHTML=`${data.children}`;
    domElement.setAttribute('href',data.props.href);
    domElement.setAttribute('target',data.props.target);
     box.appendChild(domElement);
     */
    //version_02
    const domElement=document.createElement(data.type);
    domElement.innerHTML=data.children;
    for (const prop in data.props) {
        if(prop==data.children) continue;
        domElement.setAttribute(prop,data.props[prop]);    
    }
    box.appendChild(domElement);

}

customrender(data,box);

// const para=document.createElement('p');

// para.innerHTML=`<h1>hello</h1>`;
// box.appendChild(para);