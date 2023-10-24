
export default function Dashboard() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 flex flex-col justify-between" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
      <div>
        {/* Profile Picture */}
        <div className="flex items-center mb-4">
          <img
            src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=" // Ganti URL dengan URL foto profil Anda
            alt="Profile Picture"
            className="w-16 h-16 rounded-full mr-4"
          />
        </div>

        {/* Menu */}
        <ul>
          <li className="mb-2">
            <a href="/menu_pesanan" className="block hover:bg-gray-700 rounded p-2">
              <img src="img/menu-1.png" alt="Menu Icon" /> Menu Pesanan
            </a>
          </li>
          <li className="mb-2">
            <a href="/prekrerutan_pegawai" className="block hover:bg-gray-700 rounded p-2">
              <img src="path_to_employee_icon.png" alt="Employee Icon" /> Perekrutan Pegawai
            </a>
          </li>
          <li className="mb-2">
            <a href="/laporan_pesanan" className="block hover:bg-gray-700 rounded p-2">
              <img src="path_to_report_icon.png" alt="Report Icon" /> Laporan Pesanan
            </a>
          </li>
          <li className="mb-2">
            <a href="/laporan_perekrutan" className="block hover:bg-gray-700 rounded p-2">
              <img src="path_to_recruitment_icon.png" alt="Recruitment Icon" /> Laporan Perekrutan
            </a>
          </li>
        </ul>
      </div>

      {/* Logout */}
      <div>
        <a href="/logout" className="block hover:bg-gray-700 rounded p-2">
          <img src="path_to_logout_icon.png" alt="Logout Icon" /> Logout
        </a>
      </div>
    </div>
  );
}
