import Link from "next/link";
import { pubRouter } from "@/constants/router";

/**
 * 퍼블리싱 index 화면
 * @returns
 */
export default function PublishingList() {
  const guide = pubRouter.filter((r) => r.path.startsWith("/pub/page/guide"));
  const page = [
    {
      cate: "Guide",
      list: [
        ...guide,
        {
          path: "/mail.html",
          element: "",
          title: "_Guide_Mail",
        },
      ],
    },
    {
      cate: "Page",
      list: pubRouter
        .filter((r) => r.path.startsWith("/pub/page"))
        .filter((r) => !r.path.startsWith("/pub/page/guide")),
    },
  ];

  return (
    <div className="grid grid-cols-2 w-full p-5 divide-x-2">
      {page.map((c) => (
        <div key={c.cate}>
          <h2 className="text-xl text-center">{c.cate} 화면 리스트</h2>
          <table className="table table-zebra mt34">
            <colgroup>
              <col width="5%" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>No</th>
                <th>화면</th>
              </tr>
            </thead>
            <tbody>
              {c.list.map((p, i) => {
                return (
                  <tr key={`${i}-${p.title}`}>
                    <th>{i}</th>
                    <td>
                      <Link
                        href={p.path}
                        target="_blank"
                        className="text-[#0D6EFD] underline"
                      >
                        {p.path} / {p.title}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
