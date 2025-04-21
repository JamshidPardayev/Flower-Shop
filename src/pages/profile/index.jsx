import React from 'react'
import Navbar from '../../components/Navbar'
import { NavLink, useNavigate, Outlet } from 'react-router-dom'
import { Box, Button, Modal, Typography } from '@mui/material';
import { IoMdLogOut } from "react-icons/io";
import { HiShieldExclamation } from "react-icons/hi";
import { CiUser, CiLocationOn, CiHeart, CiClock1 } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    handleClose();
    navigate('/');
  };

  const getNavLinkClasses = ({ isActive }) =>
    isActive
      ? 'flex items-center gap-x-2 pl-1 mt-2 border-l-[4px] border-l-[#46A358] text-[#46A358]'
      : 'flex items-center gap-x-2 pl-1 mt-2 hover:border-l-[4px] hover:border-l-[#46A358] hover:text-[#46A358] duration-200';

  return (
    <div>
      <Navbar />
      <div className='flex max-w-[1200px] mx-auto justify-between my-[50px]'>
        <div className='flex flex-col gap-y-2 w-[310px] px-[15px] bg-[#FBFBFB] py-4 max-sm:hidden'>
          <h2 className='text-[18px] font-semibold mb-2'>My Account</h2>

          <NavLink to="myAccount" className={getNavLinkClasses}>
            <CiUser />
            <p>Account Details</p>
          </NavLink>

          <NavLink to="myProduct" className={getNavLinkClasses}>
            <MdOutlineShoppingBag />
            <p>My Products</p>
          </NavLink>

          <NavLink to="myAddress" className={getNavLinkClasses}>
            <CiLocationOn />
            <p>Address</p>
          </NavLink>

          <NavLink to="myWishlist" className={getNavLinkClasses}>
            <CiHeart />
            <p>Wishlist</p>
          </NavLink>

          <NavLink to="myTrack" className={getNavLinkClasses}>
            <CiClock1 />
            <p>Track Order</p>
          </NavLink>

          <hr className='my-2' />

          <Button
            onClick={handleOpen}
            sx={{
              color: 'red',
              fontSize: "12px",
              display: 'flex',
              justifyContent: "start",
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <IoMdLogOut className='text-[15px]' /> Log Out
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                maxWidth: "100%",
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 2,
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <div className='flex items-center gap-x-2'>
                  <HiShieldExclamation className='text-yellow-600' />
                  <p className='text-[14px] font-bold'>Do you want to Log Out?</p>
                </div>
              </Typography>
              <Typography id="modal-modal-description" sx={{ fontSize: "12px", ml: "30px", mt: 1 }}>
                Please make sure, because this action cannot be undone!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                <div className='flex gap-x-2 justify-end'>
                  <button
                    onClick={handleClose}
                    className='w-[100px] h-[30px] border rounded-[5px] text-[14px] hover:bg-blue-300 duration-300'
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleLogout}
                    className='w-[100px] h-[30px] border rounded-[5px] text-[14px] bg-red-500 text-white hover:bg-red-700 duration-300'
                  >
                    I'm Sure
                  </button>
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>

        <div className='flex-1 px-4'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;
