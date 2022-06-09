function CompanyListItem(props) {
  const date = new Date(props.created_at);
  const prettyDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date);
  return (
    <li>
      <div className="my-4 p-4 bg-stone-200 rounded-md">
        <h2 className="text-2xl font-bold">{props.name}</h2>
        <h3 className="text-md text-gray-400">Created at {prettyDate}</h3>
      </div>
    </li>
  );
}

export default CompanyListItem;