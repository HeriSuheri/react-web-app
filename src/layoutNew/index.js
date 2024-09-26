import React, { useState, useContext, useEffect } from "react";
import PropTypes, { elementType } from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import SettingIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AssignIcon from "@mui/icons-material/AssignmentIndRounded";
import ChecklistIcon from "@mui/icons-material/ChecklistRtlRounded";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccountRounded";
import PriceCheckIcon from "@mui/icons-material/PriceCheckRounded";
import RequestQuoteIcon from "@mui/icons-material/RequestQuoteRounded";
import InventoryIcon from "@mui/icons-material/InventoryRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoneyRounded";
import PaymentIcon from "@mui/icons-material/PaymentRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchangeRounded";
import RouteIcon from "@mui/icons-material/RouteRounded";
import { getLocalStorage, removeLocalStorage } from "../utils/helpers";
import { useHistory } from "react-router-dom";
import { pathNameCONFIG } from "../config";
import ConfirmPopup from "../components/Popup/Confirm";
import avatar from "../assets/img/avatar5.png";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },

  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },

  {
    segment: "order",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },

  {
    segment: "segmentasi",
    title: "Customer Segmentation",
    icon: <AssignIcon />,
    children: [
      {
        segment: "segmentasi-list",
        title: "Segmentation List",
        icon: <ChecklistIcon />,
      },
      {
        segment: "account-type",
        title: "Account Type",
        icon: <SwitchAccountIcon />,
      },
    ],
  },

  {
    segment: "limit-charge",
    title: "Limit & Charge",
    icon: <PriceCheckIcon />,
    children: [
      {
        segment: "limit-package",
        title: "Limit Package",
        icon: <InventoryIcon />,
      },
      {
        segment: "charge-list",
        title: "Charge List",
        icon: <RequestQuoteIcon />,
      },
    ],
  },

  {
    segment: "payment-setup",
    title: "Payment Setup",
    icon: <AttachMoneyIcon />,
    children: [
      {
        segment: "biller-manager",
        title: "Biller Manager",
        icon: <PaymentIcon />,
      },
      {
        segment: "biller-category",
        title: "Biller Category",
        icon: <PaymentsRoundedIcon />,
      },
    ],
  },

  {
    kind: "divider",
  },

  {
    kind: "header",
    title: "Analytics",
  },

  {
    segment: "report",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <CurrencyExchangeIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <RouteIcon />,
      },
    ],
  },

  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },

  {
    segment: "setting",
    title: "Settings",
    icon: <SettingIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// function DemoPageContent({ pathname }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//   <Typography>Dashboard content for {pathname}</Typography>
//     </Box>
//   );
// }

// DemoPageContent.propTypes = {
//   pathname: PropTypes.string.isRequired,
// };

const DashboardLayoutBasic = ({ children }) => {
  // const { user } = useContext(RootContext);
  //   const { window, children } = props;
  const history = useHistory();
  const [popUpLogOut, setPopUpLogOut] = useState(false);
  const [loadingLogOut, setLoadingLogOut] = useState(false);
  const [error, setError] = useState({ open: false, message: "" });
  const [session, setSession] = useState({
    user: null,
  });

  useEffect(() => {
    const data = getLocalStorage("user");
    setSession({
      user: {
        name: "Hery Suhery",
        email: data?.email,
        // image: `url(${avatar})`,
        image:
          "https://media.istockphoto.com/id/1222755058/id/foto/potret-tersenyum-berjenggot-pengusaha-ilustrasi-3d-kartun-karakter-pria-berdiri-berjas-dengan.jpg?s=1024x1024&w=is&k=20&c=9dncxvQUqf-Y0Pqdvo4tockBSsD5DN2wNijLR-NuMGU=",
      },
    });
  }, []);

  const handleLogOut = () => {
    setLoadingLogOut(true);
    signOut(auth)
      .then((res) => {
        setLoadingLogOut(false);
        removeLocalStorage("user");
        history.push(pathNameCONFIG.HOME);
      })
      .catch((err) => {
        setLoadingLogOut(false);
        setError({ open: true, message: err.message });
      });
    setSession({ ...session, user: null });
  };

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        // setSession({
        //   user: {
        //     name: "Hery Suhery",
        //     email: "herysuhery94@gmail.com.com",
        //     image: "https://avatars.githubusercontent.com/u/19550456",
        //   },
        // });
        history.push(pathNameCONFIG.LOGIN);
      },
      signOut: () => {
        setPopUpLogOut(true);
      },
    };
  }, []);

  const brand = {
    logo: (
      <img
        src="https://m.media-amazon.com/images/I/511MabkGUyL._AC_UF894,1000_QL80_.jpg"
        alt=""
        width={75}
        style={{ borderRadius: "20px" }}
      />
    ),
    title: <span style={{ color: "red" }}>I ROSSONERI</span>,
  };

  //   const [pathname, setPathname] = React.useState('/dashboard');

  //   const router = React.useMemo(() => {
  //     return {
  //       pathname,
  //       searchParams: new URLSearchParams(),
  //       navigate: (path) => setPathname(String(path)),
  //     };
  //   }, [pathname]);

  // Remove this const when copying and pasting into your project.
  //   const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      session={session}
      navigation={NAVIGATION}
      authentication={authentication}
      branding={brand}
      //   router={router}
      theme={demoTheme}
      //   window={demoWindow}
    >
      <DashboardLayout
      //   slotProps={{
      //   toolbarAccount: {
      //     localeText: { signInLabel: "", signOutLabel: "" },
      //     slotProps: {
      //       iconButton: {},
      //       signInButton: {},
      //       signOutButton: {},
      //     },
      //     slots: {
      //       menuItems: elementType,
      //       signInButton: elementType,
      //       signOutButton: elementType,
      //     },
      //   },
      //   toolbarActions: {},
      // }}
      >
        {/* <DemoPageContent pathname={pathname} /> */}

        {children}

        <ConfirmPopup
          isOpen={popUpLogOut}
          handleClose={() => setPopUpLogOut(false)}
          onContinue={handleLogOut}
          title="Confirmation"
          message="Are you sure want log out?"
          submessage=""
          loading={loadingLogOut}
        />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
};

DashboardLayoutBasic.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  //   window: PropTypes.func,
};

export default DashboardLayoutBasic;
