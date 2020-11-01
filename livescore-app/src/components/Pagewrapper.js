import React from 'react';
import Typography from "@material-ui/core/Typography";

const PageWrapper = ({ title, children }) => (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '30px', backgroundColor: 'white' }}>
        <Typography variant='h3' component='h3'>
            {title}
        </Typography>
        {children}
    </div>
)

export default PageWrapper;