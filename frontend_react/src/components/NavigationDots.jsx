import React from "react";

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map((items, index) => (
          <a
            href={`#${items}`}
            key={items + index}
            className="app__navigation-dot"
            style={active === items ? {backgroundColor: '#313BCA'} : { } }
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
