// // ExampleSidebar.tsx
// import SidebarMenuItem from './SidebarMenuItem';

// const menuItems = [
//   { label: 'Home', path: '/' },
//   { label: 'About', path: '/about' },
//   {
//     label: 'Services',
//     path: '/services',
//     subItems: [
//       { label: 'All Services', path: '/services' },
//       { label: 'Add Service', path: '/services/add' },
//     ],
//   },
//   { label: 'Contact', path: '/contact' },
// ];

// const ExampleSidebar = () => {
//   return (
//     <ul className="sidebar">
//       {menuItems.map((item, index) => (
//         <SidebarMenuItem
//           key={item.path}
//           label={item.label}
//           path={item.path}
//           subItems={item.subItems}
//           collapseId={`${item.label.toLowerCase()}-collapse-${index}`}
//         />
//       ))}
//     </ul>
//   );
// };

// export default ExampleSidebar;

// // components/SidebarMenuItem.tsx
// import Link from 'next/link';

// interface SubItem {
//   label: string;
//   path: string;
// }

// interface SidebarMenuItemProps {
//   label: string;
//   path: string;
//   subItems?: SubItem[];
//   collapseId?: string;
// }

// const SidebarMenuItem = ({ label, path, subItems, collapseId }: SidebarMenuItemProps) => {
//   if (subItems && subItems.length > 0) {
//     return (
//       <li className="mb-1">
//         <button
//           className="btn btn-toggle align-items-center rounded collapsed"
//           data-bs-toggle="collapse"
//           data-bs-target={`#${collapseId}`}
//           aria-expanded="false"
//         >
//           {label}
//         </button>
//         <div className="collapse" id={collapseId}>
//           <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//             {subItems.map((item) => (
//               <li key={item.path}>
//                 <Link href={item.path}>{item.label}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </li>
//     );
//   }

//   return (
//     <li className="mb-1">
//       <Link href={path}>
//         <button className="btn btn-toggle align-items-center rounded">
//           {label}
//         </button>
//       </Link>
//     </li>
//   );
// };

// export default SidebarMenuItem;
