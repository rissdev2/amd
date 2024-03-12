/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
     
        extend: {
            backgroundImage: {
                images: "url('./assets/images.png')",
            },
            colors:{
                'text-color':'#A4A4A4',    
                'bg-black':'#000',    
                'text-white':'#fff',    
          },
        },
    },
    plugins: [],
};




  