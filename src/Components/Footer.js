import React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import LanguageIcon from '@mui/icons-material/Language';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';

export default function FooterAccount() {
  return (
    <Box className="footer" sx={{ 
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    }}>
      <Grid container spacing={20} columns={12} sx={{
        width: '100%',
        maxWidth: '1280px',
        margin: 'auto',
        padding: '48px 80px',
      }}>
        <Grid xs={12} md={4} sx={{ marginBottom: '24px' }}>
          <div className="footer-menu">
            <ul className="footer-list">
              <li>Support</li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Get help with a safety issue</a></li>
              <li><a href="#">BearCover</a></li>
              <li><a href="#">Anti-discrimination</a></li>
              <li><a href="#">Disability support</a></li>
              <li><a href="#">Cancellation options</a></li>
              <li><a href="#">Report neighborhood concern</a></li>
            </ul>
          </div>
        </Grid>
        <Grid xs={12} md={4} sx={{ marginBottom: '24px' }}>
          <div className="footer-menu">
            <ul className="footer-list">
              <li>Hosting</li>
              <li><a href="#">Bearbnb your home</a></li>
              <li><a href="#">BearCover for Hosts</a></li>
              <li><a href="#">Hosting resources</a></li>
              <li><a href="#">Community forum</a></li>
              <li><a href="#">Hosting responsibly</a></li>
              <li><a href="#">Bearbnb-friendly apartments</a></li>
              <li><a href="#">Join a free Hosting class</a></li>
            </ul>
          </div>
        </Grid>
        <Grid xs={12} md={4} sx={{ marginBottom: '24px' }}>
          <div className="footer-menu">
            <ul className="footer-list">
              <li>Bearbnb</li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">New features</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Gift cards</a></li>
              <li><a href="#">Bearbnb.org emergency stays</a></li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: '#dddddd' }} />
      <div className="footer-small" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 80px',
      }}>
        <div className="footer-info">
          <p>© 2025 Bearbnb, Inc. · <a href="#">Terms</a> · <a href="#">Sitemap</a> · <a href="#">Privacy</a> · <a href="#">Your Privacy Choices</a></p>
          <EditAttributesIcon fontSize="small" sx={{
            color: "rgb(0, 102, 255)", 
            alignSelf: "center",
            marginLeft: "4px",
          }}/>
        </div>
        <div className="footer-extra">
          <LanguageIcon fontSize="small" sx={{
            alignSelf: "center",
            marginRight: "4px",
          }}/> 
          <p>English (US)</p>
          <AttachMoneyIcon fontSize="small" sx={{
            alignSelf: "center",
            margin: "0 4px 0 12px",
          }}/>
          <p>USD</p>
          <FacebookIcon fontSize="small" sx={{
            alignSelf: "center",
            margin: "0 8px 0 12px"
          }}/>
          <TwitterIcon fontSize="small" sx={{
            alignSelf: "center",
            margin: "0 8px"
          }}/>
          <InstagramIcon fontSize="small" sx={{
            alignSelf: "center",
            margin: "0 8px"
          }}/>
        </div>
      </div>
    </Box>
  );
}

