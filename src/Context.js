import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const Context = React.createContext({
  Cart: false,
  openCart: () => {},
  closeCart: () => {},
  List: [],
  Merchandise: [],
  CartList: [],
  addCart: () => {},
  removeCart: () => {},
  changeCart: () => {},
  isLogIn: false,
  logIn: () => {},
  logOut: () => {},
  token: null,
  userEmail: "",
});

export function ContextProvider(props) {
  //  crud variable                   <==================<<<<
  const crudUrl = "crud.com Url";

  // Dummy Data
  const List = [
    {
      item: "Stereo Hearts",
      id: "Stereo-Hearts",
      url: "https://c.saavncdn.com/947/Stereo-Hearts-feat-Adam-Levine--English-2011-20190607045815-500x500.jpg",
      price: "150",
      star: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, risus vel pulvinar volutpat, dolor neque accumsan dui, id ullamcorper tellus erat non leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at dolor ac mauris sagittis faucibus eget ac odio. Etiam justo dolor, tincidunt eget mauris vel, malesuada suscipit tortor. Proin semper metus in justo dignissim placerat. Fusce rhoncus, massa in molestie suscipit, nulla orci varius orci, quis finibus ante turpis vitae odio. Suspendisse pellentesque risus eu est vulputate consectetur.",
    },
    {
      item: "The Nights",
      id: "The-Nights",
      url: "https://c.saavncdn.com/184/The-Nights-Avicii-By-Avicii-English-2015-500x500.jpg",
      price: "178",
      star: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, risus vel pulvinar volutpat, dolor neque accumsan dui, id ullamcorper tellus erat non leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at dolor ac mauris sagittis faucibus eget ac odio. Etiam justo dolor, tincidunt eget mauris vel, malesuada suscipit tortor. Proin semper metus in justo dignissim placerat. Fusce rhoncus, massa in molestie suscipit, nulla orci varius orci, quis finibus ante turpis vitae odio. Suspendisse pellentesque risus eu est vulputate consectetur.",
    },
    {
      item: "Rise",
      id: "Rise",
      url: "https://c.saavncdn.com/750/Rise-English-2018-20180523230337-500x500.jpg",
      price: "128",
      star: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, risus vel pulvinar volutpat, dolor neque accumsan dui, id ullamcorper tellus erat non leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at dolor ac mauris sagittis faucibus eget ac odio. Etiam justo dolor, tincidunt eget mauris vel, malesuada suscipit tortor. Proin semper metus in justo dignissim placerat. Fusce rhoncus, massa in molestie suscipit, nulla orci varius orci, quis finibus ante turpis vitae odio. Suspendisse pellentesque risus eu est vulputate consectetur.",
    },
    {
      item: "Me, Myself & I",
      id: "Me,-Myself-&-I",
      url: "https://c.saavncdn.com/473/When-It-s-Dark-Out-English-2015-500x500.jpg",
      price: "195",
      star: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, risus vel pulvinar volutpat, dolor neque accumsan dui, id ullamcorper tellus erat non leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at dolor ac mauris sagittis faucibus eget ac odio. Etiam justo dolor, tincidunt eget mauris vel, malesuada suscipit tortor. Proin semper metus in justo dignissim placerat. Fusce rhoncus, massa in molestie suscipit, nulla orci varius orci, quis finibus ante turpis vitae odio. Suspendisse pellentesque risus eu est vulputate consectetur.",
    },
  ];

  const Merchandise = [
    {
      item: "Love it Cup",
      id: "Love-it-Cup",
      url: "https://c1.wallpaperflare.com/preview/906/25/252/coffee-drink-cafe-cup.jpg",
      price: "75",
      star: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, risus vel pulvinar volutpat, dolor neque accumsan dui, id ullamcorper tellus erat non leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at dolor ac mauris sagittis faucibus eget ac odio. Etiam justo dolor, tincidunt eget mauris vel, malesuada suscipit tortor. Proin semper metus in justo dignissim placerat. Fusce rhoncus, massa in molestie suscipit, nulla orci varius orci, quis finibus ante turpis vitae odio. Suspendisse pellentesque risus eu est vulputate consectetur.",
    },
    {
      item: "Legendary T-shirt",
      id: "Legendary-T-shirt",
      url: "https://c1.wallpaperflare.com/preview/428/266/566/title-photo-logo-shirt.jpg",
      price: "250",
      star: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, risus vel pulvinar volutpat, dolor neque accumsan dui, id ullamcorper tellus erat non leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at dolor ac mauris sagittis faucibus eget ac odio. Etiam justo dolor, tincidunt eget mauris vel, malesuada suscipit tortor. Proin semper metus in justo dignissim placerat. Fusce rhoncus, massa in molestie suscipit, nulla orci varius orci, quis finibus ante turpis vitae odio. Suspendisse pellentesque risus eu est vulputate consectetur.",
    },
    {
      item: "Cool Grocery Bag",
      id: "Cool-Grocery-Bag",
      url: "https://img.freepik.com/premium-photo/mockup-reusable-grocery-bags-with-print-form-large-black-peas-green-leaf-white-isol_248570-2576.jpg?w=360",
      price: "100",
      star: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, risus vel pulvinar volutpat, dolor neque accumsan dui, id ullamcorper tellus erat non leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at dolor ac mauris sagittis faucibus eget ac odio. Etiam justo dolor, tincidunt eget mauris vel, malesuada suscipit tortor. Proin semper metus in justo dignissim placerat. Fusce rhoncus, massa in molestie suscipit, nulla orci varius orci, quis finibus ante turpis vitae odio. Suspendisse pellentesque risus eu est vulputate consectetur.",
    },
    {
      item: "Premium Bottles",
      id: "Premium-Bottles",
      url: "https://mockuptree.com/wp-content/uploads/edd/2021/01/Free_Bottle_Mockups-e1610718967677.jpg",
      price: "395",
      star: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, risus vel pulvinar volutpat, dolor neque accumsan dui, id ullamcorper tellus erat non leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec at dolor ac mauris sagittis faucibus eget ac odio. Etiam justo dolor, tincidunt eget mauris vel, malesuada suscipit tortor. Proin semper metus in justo dignissim placerat. Fusce rhoncus, massa in molestie suscipit, nulla orci varius orci, quis finibus ante turpis vitae odio. Suspendisse pellentesque risus eu est vulputate consectetur.",
    },
  ];

  // React Hooks
  const [CartList, setCartList] = useState([]);
  const [Cart, setCart] = useState(false);
  const [isLogIn, setLogIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userEmail, setEmail] = useState("");

  // asyn function to getinformation                   <==================<<<<
  const getCartFromBackend = useCallback(async (email, id) => {
    const response = await axios.get(`${crudUrl}/cart${email}/${id}`);
    setCartList(response.data.cartData);
  }, []);

  // async function ADD                    <==================<<<<
  async function addCartToBackend(cartData) {
    let storeData = JSON.parse(localStorage.getItem("token"));
    (async () => {
      const oldUser = await firstCheck(storeData.email);
      if (oldUser.length === 0) {
        const response = await axios.post(`${crudUrl}/cart${storeData.email}`, {
          cartData: cartData,
        });
        if (!storeData.id) {
          storeData.id = response.data._id;
          localStorage.setItem("token", JSON.stringify(storeData));
        }
      } else {
        await axios.put(`${crudUrl}/cart${storeData.email}/${storeData.id}`, {
          cartData: cartData,
        });
      }
    })();
  }

  // VERY FIRST Check For Old Data                   <==================<<<<
  async function firstCheck(email) {
    try {
      const newResponse = await axios.get(`${crudUrl}/cart${email}`);
      if (newResponse.data.length !== 0) {
        const storeData = JSON.parse(localStorage.getItem("token"));
        if (!storeData.id) {
          storeData.id = newResponse.data[0]._id;
          localStorage.setItem("token", JSON.stringify(storeData));
        }
        return {
          length: newResponse.data[0].cartData.length,
          cartId: newResponse.data[0]._id,
        };
      } else {
        return { length: 0 };
      }
    } catch (error) {
      console.log(error);
    }
  }

  // seting Login from localstorage (Later USE)                   <==================<<<<
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     const storeData = JSON.parse(localStorage.getItem("token"));
  //     setToken(storeData.token);
  //     setEmail(storeData.longemail);
  //     (async () => {
  //       const oldUser = await firstCheck(storeData.email);
  //       if (oldUser.length > 0) {
  //         getCartFromBackend(storeData.email, oldUser.cartId);
  //       }
  //     })();
  //     setLogIn(true);
  //   }
  // }, [getCartFromBackend]);

  // Logging Functions (Later USE)                   <==================<<<<
  function logIn(id, email) {
    // localStorage.setItem(
    //   "token",
    //   JSON.stringify({
    //     token: id,
    //     email: email.replace(/[^A-Za-z0-9]/gi, ""),
    //     longemail: email,
    //   })
    // );
    // setTimeout(() => {
    //   localStorage.removeItem("token");
    // }, 1000 * 60 * 5);
    // const storeData = JSON.parse(localStorage.getItem("token"));
    // (async () => {
    //   const oldUser = await firstCheck(storeData.email);
    //   if (oldUser.length > 0) {
    //     getCartFromBackend(storeData.email, oldUser.cartId);
    //   }
    // })();
    // setEmail(storeData.longemail);
    setEmail(email);
    setToken(id);
    setLogIn(true);
  }

  // Log OUT fUCTION
  function logOut() {
    // localStorage.removeItem("token");                   <==================<<<<
    setEmail("");
    setToken(null);
    setLogIn(false);
    setCartList([]);
  }

  // Cart Function
  function openCart() {
    setCart(true);
  }

  function closeCart() {
    setCart(false);
  }

  function addCart(data) {
    if (
      CartList.every((item) => {
        return item.id !== data.id;
      })
    ) {
      data.quantity = 1;
      // addCartToBackend([...CartList, data]);                   <==================<<<<
      setCartList((oldCart) => {
        return [...oldCart, data];
      });
    }
  }

  function removeCart(id) {
    // addCartToBackend(                   <==================<<<<
    //   CartList.filter((item) => {
    //     return item.id !== id;
    //   })
    // );
    setCartList((oldCart) => {
      const cartData = oldCart.filter((item) => {
        return item.id !== id;
      });
      return cartData;
    });
  }

  function changeCart(id, value) {
    let newCartData = CartList.map((item) => {
      if (item.id === id) {
        let Quantity = item.quantity + value;
        if (Quantity > 0) {
          item.quantity = Quantity;
        }
      }
      return item;
    });
    // addCartToBackend(newCartData);                   <==================<<<<
    setCartList(newCartData);
  }

  return (
    <Context.Provider
      value={{
        Cart: Cart,
        openCart: openCart,
        closeCart: closeCart,
        List: List,
        Merchandise: Merchandise,
        CartList: CartList,
        addCart: addCart,
        removeCart: removeCart,
        changeCart: changeCart,
        isLogIn: isLogIn,
        userEmail: userEmail,
        logIn: logIn,
        logOut: logOut,
        token: token,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Context;
