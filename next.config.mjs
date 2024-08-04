/** @type {import('next').NextConfig} */
const nextConfig = {images:{
  remotePatterns:[
     {
      hostname: 'asset.cloudinary.com',
      protocol:'https'
     },
     {
      hostname: 'www.clarens.co.za',
      protocol:'https'
     },
     {
      hostname: 'upload.wikimedia.org',
      protocol:'https'
     },
     {
      hostname: 'static.wixstatic.com',
      protocol:'https'
     },
     {
      hostname: 'computicket-boxoffice-media.s3.af-south-1.amazonaws.com',
      protocol:'https'
     }
     
  ]
}
};

export default nextConfig;
