
import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home';
import Detail from '../components/Detail';
import NotFound from '../components/NotFound';

// Este documento se crea para que todas las rutas esten juntas y de esa manera, optimizar el codigo.

// Para poder utilizar esta forma de ruteo, debe instalarse react-router-dom (igual que en la otra forma), pero en esta oportunidad, se debe importar creatBrowserRouter en este documento y RouterProvider en el MAIN. No en app, sino en Main.jsx

//Esta forma de ruteo se utiliza para proyectos medianos a grandes ya que permite un mejor control de las rutas.

// Como se usa:
    // En este documento, se crea la variable router llama a createBrowserRouter y crea un array de objetos. Cada objeto es una ruta que va a tener 2 elementos. El path y el element.

    // Si quisiera agregar un error 404, se debe poner como un tercer elemento en el primer objeto para que el sistema entienda que si nada de los otros objetos coincide, debe llamarse a ese errorElement.

    // La variable router va a quedar opaca ya que todavia no se esta utilizando en ningun lado entonces para poder "activarlo", hay que exportar este documento e importarlo en main.jsx. Una vez en main, dentro de las etiquetas react.strictmode, se debe reemplazar el componente App por el componente <RouterProvider /> que es el componente que habiamos importado. Ademas, es en donde hacemos uso de la variable router ya que se debe agregar como una prop. Por ende, ese routerprovider quedaria "<RouterProvider router={router} />".


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

export default router
