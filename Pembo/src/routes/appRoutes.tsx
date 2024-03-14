
// import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import ComponentPageLayout from "../pages/dashboard/products/ProductPageLayout";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ProductsTable from "../pages/dashboard/products/list";
import ButtonPage from "../pages/dashboard/products/create";
import ProductPageLayout from "../pages/dashboard/products/ProductPageLayout";
import ProductCreate from "../pages/dashboard/products/create";
import InvoiceDetails from "../pages/dashboard/Invoices/Details";
import InvoiceList from "../pages/dashboard/Invoices/List";
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import CustomerPageLayout from "../pages/dashboard/Customers/CustumorsPageLayout";
import CustomerList from "../pages/dashboard/Customers/List";
import CustomerEdit from "../pages/dashboard/Customers/Edit";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import CustomerDetail from "../pages/dashboard/Customers/Detail";
import AccountPage from "../pages/Account/AccountPage"
import ProductEdit from "../pages/dashboard/products/edit";


const appRoutes: RouteType[] = [
  {
    path: "/Account",
    element: <AccountPage />,
    state: "Account",
    sidebarProps: {
      displayText: "Account",
      icon: <ManageAccountsOutlinedIcon />
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
      },
      {
        path: "/customer/Edit",
        element: <CustomerEdit />,
        state: "customer.Edit",
        sidebarProps: {
          displayText: "Edit"
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
        state: "product.create",
        sidebarProps: {
          displayText: "Create"
        }
      },
      {
        path: "/product/edit/:productId",
        element: <ProductEdit />,
        state: "product.edit",
        sidebarProps: {
          displayText: "Edit"
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