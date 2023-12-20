import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PollTwoTone from '@mui/icons-material/PollTwoTone';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import InstallationPage from "../pages/Overview/Overview";
import DocumentationPage from "../pages/documentation/DocumentationPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/Overview",
    element: <DocumentationPage />,
    state: "Overview",
    sidebarProps: {
      displayText: "Overview",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/Analytics",
    element: <DocumentationPage />,
    state: "Analytics",
    sidebarProps: {
      displayText: "Analytics",
      icon: <PollTwoTone />
    }
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
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "Customers",
    sidebarProps: {
      displayText: "Customers",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "List"
        },
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Details"
        }
      },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "Edit"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "Products",
    sidebarProps: {
      displayText: "Products",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "List"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Create"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "Orders",
    sidebarProps: {
      displayText: "Orders",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "List"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Details"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "Invoices",
    sidebarProps: {
      displayText: "Invoices",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "List"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Details"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "Logistics",
    sidebarProps: {
      displayText: "Logistics",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Dashboard"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Fleet"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "Academy",
    sidebarProps: {
      displayText: "Academy",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Dashboard"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Course"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "Social Media",
    sidebarProps: {
      displayText: "Social Media",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Profile"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Feed"
        }
      }
    ]
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "Mail",
    sidebarProps: {
      displayText: "Mail",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "Chat",
    sidebarProps: {
      displayText: "Chat",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "Auth",
    sidebarProps: {
      displayText: "Auth",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Login"
        },
      },
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Register"
        },
      },
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Forgot Password"
        },
      },
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Resert Password"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Verify Code"
        }
      }
    ]
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "Pricing",
    sidebarProps: {
      displayText: "Pricing",
      icon: <FormatListBulletedOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "Checkout",
    sidebarProps: {
      displayText: "Checkout",
      icon: <FormatListBulletedOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "Contact",
    sidebarProps: {
      displayText: "Contact",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }

];

export default appRoutes;