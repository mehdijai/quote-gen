import { ReactNode } from "react";
import tableStyle from "./table.module.scss";

export function Table({ children }: { children: ReactNode }) {
  return <table className={tableStyle.table}>{children}</table>;
}

export function TableHead({ children }: { children: ReactNode }) {
  return <thead>{children}</thead>;
}

export function TableBody({
  children,
  emptyStateText,
}: {
  children: ReactNode;
  emptyStateText?: string;
}) {
  if (
    children === undefined ||
    (Array.isArray(children) && children.length === 0)
  ) {
    return (
      <tbody>
        <tr className={tableStyle["empty-row"]}>
          <td colSpan={100}>
            <p>{emptyStateText ?? "No data available"}</p>
          </td>
        </tr>
      </tbody>
    );
  }

  return <tbody>{children}</tbody>;
}

export function TableFoot({ children }: { children: ReactNode }) {
  return <tfoot>{children}</tfoot>;
}

Table.TableHead = TableHead;
Table.TableBody = TableBody;
Table.TableFoot = TableFoot;
