const menu = [
  {
    id: 1,
    title: "Butter",
    category: "Breakfast",
    price: 15,
    img: "animal/animal.jpg",
    desc: `"what ever you want will be given to you.hope u r okay
    what ever you want"`,
  },
  {
    id: 2,
    title: "Bread",
    category: "Shakes",
    price: 15,
    img: "animal/download.jpg",
    desc: `"what ever you want will be given to you.hope u r okay
    what ever you want"`,
  },
  {
    id: 3,
    title: "Butter and Bread",
    category: "Breakfast",
    price: 15,
    img: "animal/animal2.jpg",
    desc: `"what ever you want will be given to you.hope u r okay
    what ever you want"`,
  },
  {
    id: 4,
    title: "Bread",
    category: "Shakes",
    price: 15,
    img: "animal/download1.jpg",
    desc: `"what ever you want will be given to you.hope u r okay
    what ever you want"`,
  },
  {
    id: 6,
    title: "Butter",
    category: "Breakfast",
    price: 15,
    img: "animal/animal.jpg",
    desc: `"what ever you want will be given to you.hope u r okay
    what ever you want"`,
  },
  {
    id: 7,
    title: "Butter and Bread",
    category: "Shakes",
    price: 15,
    img: "animal/animal3.jpg",
    desc: `"what ever you want will be given to you.hope u r okay
    what ever you want"`,
  },
  {
    id: 8,
    title: "Butter and Bread",
    category: "Lunch",
    price: 15,
    img: "animal/download2.jpg",
    desc: `"what ever you want will be given to you.hope u r okay
    what ever you want"`,
  },
  {
    id: 9,
    title: "Butter",
    category: "Lunch",
    price: 15,
    img: "animal/animal.jpg",
    desc: `"what ever you want will be given to you.hope u r okay
    what ever you want"`,
  },
  {
    id: 10,
    title: "Bread",
    category: "Dinner",
    price: 15,
    img: "animal/download.jpg",
    desc: `"what ever you want will be given to you.hope u r okay
    what ever you want"`,
  },
];

let buttonDisplay = document.querySelector(".buttons");

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItem(menu);
  displayMenuButton();
});

function displayMenuItem(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
        <img src=${item.img} class="photo" alt="">
        <div class="item-info">
            <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
        </header>
        <hr>
                <p class="item-text">${item.desc}
            </p>
            </div>
        
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButton() {
  const categories = menu.reduce(
    (newCategory, newItem) => {
      if (!newCategory.includes(newItem.category)) {
        newCategory.push(newItem.category);
      }
      return newCategory;
    },
    ["All"]
  );

  // mapping through the butons array

  let categoryBtn = categories.map((category) => {
    return `<button class="btn" data-filter=${category}>${category}</button>`;
  });

  categoryBtn = categoryBtn.join("");

  buttonDisplay.innerHTML = categoryBtn;
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const filter = e.target.dataset.filter;

      const menuCategory = menu.filter(function (menuItem) {
        //console.log(menuItem.category)
        if (menuItem.category === filter) {
          return menuItem;
        }
      });

      if (filter == "All") {
        displayMenuItem(menu);
      } else {
        displayMenuItem(menuCategory);
      }
    });
  });
}
