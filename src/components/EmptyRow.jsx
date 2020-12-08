export default function EmptyRow({ message }) {
  return (
    <tr>
      <td
        colSpan={99}
        className="text-muted"
        style={{ paddingLeft: "1.25rem" }}
      >
        {message}
      </td>
    </tr>
  );
}
