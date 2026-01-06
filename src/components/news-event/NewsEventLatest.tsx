import { formatDate } from "@/lib/helper";
import Image from "next/image";
import Link from "next/link";

export default function NewsEventLatest({
  recentPostTitle,
  latestArticle,
  locale,
}: {
  recentPostTitle: string;
  latestArticle: any[];
  locale: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-bold text-lg mb-4">{recentPostTitle}</h3>
      <ul className="text-sm text-gray-700 space-y-4">
        {latestArticle.slice(0, 3).map((news: any, idx: any) => (
          <li key={idx} className="flex items-center gap-3">
            <Image
              src={news.image}
              alt={news.title}
              width={60}
              height={40}
              className="rounded object-cover"
              style={{ height: "auto", width: "auto" }}
            />
            <div>
              <span className="block text-xs text-gray-400 mb-1">
                {formatDate(news.date, locale)}
              </span>
              <Link href={`/${locale}/news-event/${news.slug}`} passHref>
                <span className="font-semibold hover:text-orange-400 transition-colors cursor-pointer">
                  {news.title}
                </span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
