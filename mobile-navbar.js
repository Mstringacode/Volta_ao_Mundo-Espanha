class MobileNavbar{
    constructor( mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active"; 
    }

    addClickEvante(){
        this.mobileMenu.addEventListener("click", () => console.log
        ("Hey"));
    }
    
    Init(){
        if(this.mobileMenu){
           this.addClickEvante(); 
        }
        return this;
    }
    const mobileNavbar = new MobileNavbar(".mobile-menu","nav-list",".nav-list li");
    MobileNavbar.Init();

    
}