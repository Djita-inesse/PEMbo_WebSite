import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import ComponentPageLayout from "../pages/dashboard/products/ProductPageLayout";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PollTwoTone from '@mui/icons-material/PollTwoTone';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ProductsTable from "../pages/dashboard/products/list";
import ButtonPage from "../pages/dashboard/products/create";
import InstallationPage from "../pages/dashboard/Overview/Overview";
import ProductPageLayout from "../pages/dashboard/products/ProductPageLayout";
import ProductCreate from "../pages/dashboard/products/create";
import InvoiceDetails from "../pages/dashboard/Invoices/Details";
import InvoiceList from "../pages/dashboard/Invoices/List";
import CustomerPageLayout from "../pages/dashboard/Customers/CustumorsPageLayout";
import CustomerList from "../pages/dashboard/Customers/List";
import CustomerDetail from "../pages/dashboard/Customers/Detail";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/E-Commerce",
    element: <InstallationPage />,
    state: "E-Commerce",
    sidebarProps: {
      displayText: "E-Commerce",
      icon: <FileDownloadOutlinedIcon />
    }
  },

  {
    path: " ",
    element: "",
    state: "documentation",
    sidebarProps: {
      displayText: "Concepts",

    }
  },
  {
    path: "/customer",
    element: <CustomerPageLayout />,
    state: "customers",
    sidebarProps: {
      displayText: "customers",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/customer/list",
        element: <CustomerList />,
        state: "customer.list",
        sidebarProps: {
          displayText: "List"
        },
      },
      {
        path: "/customer/detail",
        element: <CustomerDetail />,
        state: "customer.detail",
        sidebarProps: {
          displayText: "Create"
        }
      }
    ]
  },
  {
    path: "/product",
    element: <ProductPageLayout />,
    state: "Products",
    sidebarProps: {
      displayText: "Products",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/product/list",
        element: <ProductsTable />,
        state: "product.list",
        sidebarProps: {
          displayText: "List"
        },
      },
      {
        path: "/product/create",
        element: <ProductCreate />,
        state: "product.creat",
        sidebarProps: {
          displayText: "Create"
        }
      }
    ]
  },

  {
    path: "/invoices",
    element: <ComponentPageLayout />,
    state: "Invoices",
    sidebarProps: {
      displayText: "Invoices",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/invoices/list",
        element: <InvoiceList />,
        state: "component.alert",
        sidebarProps: {
          displayText: "List"
        },
      },
      {
        path: "/invoices/detail",
        element: <InvoiceDetails />,
        state: "component.button",
        sidebarProps: {
          displayText: "Details"
        }
      }
    ]
  },

];

export default appRoutes;