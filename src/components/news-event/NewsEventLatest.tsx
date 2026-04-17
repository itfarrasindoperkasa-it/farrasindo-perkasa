import { formatDate } from "@/lib/helper";
import { Calendar } from "lucide-react";
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
    <div className="flex flex-col gap-0">
      {recentPostTitle && (
        <h3 className="text-xl font-bold text-gray-900 mb-8">{recentPostTitle}</h3>
      )}
      <ul className="flex flex-col gap-6">
        {latestArticle.slice(0, 3).map((news: any, idx: any) => (
          <li key={idx} className="flex gap-4 group pb-6 border-b border-gray-100 last:border-none last:pb-0">
            <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#f97d00]">
                <Calendar size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  {formatDate(news.date, locale)}
                </span>
              </div>
              <Link href={`/${locale}/news-event/${news.slug}`} passHref>
                <h4 className="text-sm font-bold text-gray-900 leading-snug hover:text-[#f97d00] transition-colors line-clamp-2">
                  {news.title}
                </h4>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
