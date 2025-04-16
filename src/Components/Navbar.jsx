import Logo from "../assets/logo.png";
import profile from "../assets/profile.svg";

function Navigation() {
  return (
    <div className="bg-[#f7bf9f]">
      <nav className="container py-[20px] flex justify-between items-center">
        <a exact href="/" activeClassName="active">
          <img src={Logo} alt="" />
        </a>
        <span className="flex gap-[40px] items-center">
          <a
            className="font-lato font-bold text-[#424551]"
            href="/about"
            activeClassName="active"
          >
            About Us
          </a>
          <a
            className="font-lato font-bold text-[#424551]"
            href="/courses"
            activeClassName="active"
          >
            Courses
          </a>
          <a
            className="font-lato font-bold text-[#424551]"
            href="/events"
            activeClassName="active"
          >
            Events
          </a>
          <a
            className="font-lato font-bold text-[#424551]"
            href="/blog"
            activeClassName="active"
          >
            Blog
          </a>
          <a
            className="font-lato font-bold text-[#424551]"
            href="/contacts"
            activeClassName="active"
          >
            Contacts
          </a>
        </span>
        <span className="flex gap-[36px] items-center">
          <a
            className="font-lato font-bold text-white px-[40px] leading-[52px] rounded bg-[linear-gradient(56deg,_#FF3F3A_0%,_#F75E05_100%)]"
            href="/about"
            activeClassName="active"
          >
            Get consultation
          </a>
          <a
            className="flex items-center gap-[10px] font-lato font-bold text-[#424551]"
            href="/login"
            activeClassName="active"
          >
            <img src={profile} alt="" />
            Log in / Register
          </a>
        </span>
      </nav>
    </div>
  );
}

export default Navigation;
