import { useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { routes } from "../../Utils/routes";

const profileRoutes = routes.filter((r) => r.profile);
const ProfileDropDown = ({ user }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings" size="md">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user?.lastName} src={user.photo} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {profileRoutes.map((route) => (
          <MenuItem
            component={Link}
            to={route?.path}
            key={route?.key}
            onClick={handleCloseUserMenu}
          >
            <Typography textAlign="center">{route?.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

ProfileDropDown.propTypes = {
  user: PropTypes.object.isRequired,
};
export default ProfileDropDown;
