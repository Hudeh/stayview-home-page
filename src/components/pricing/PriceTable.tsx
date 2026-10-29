import { formatPrice, type PriceLine } from "@/lib/content";

export function PriceTable({ rows }: { rows: PriceLine[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-surface text-muted">
          <tr>
            <th className="px-4 py-3 font-semibold">Module</th>
            <th className="px-4 py-3 font-semibold">Cloud / month</th>
            <th className="px-4 py-3 font-semibold">On-prem</th>
            <th className="px-4 py-3 font-semibold">Maintenance / year</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-t border-border">
              <td className="px-4 py-3 font-medium">
                {row.name}
                {row.note ? (
                  <span className="mt-0.5 block text-xs font-normal text-muted">{row.note}</span>
                ) : null}
              </td>
              <td className="px-4 py-3">{formatPrice(row.monthly)}</td>
              <td className="px-4 py-3">{formatPrice(row.onPrem)}</td>
              <td className="px-4 py-3">{formatPrice(row.maintenance)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
