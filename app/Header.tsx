import Link from "next/link"

const Header = () => {
  return(
    <div className="navbar bg-gray-800 sticky top-0 text-sky-50">{/*Nav Bar stick to the top while scrolling*/}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl hover:bg-sky-700">Next Data Fetching UI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-sky-700"><a>Posts</a></li>
          <li>
            <details>
              <summary className="hover:bg-sky-700">
                Others
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a>Albums</a></li>
                <li><a>Users</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header