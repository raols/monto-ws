import CompanyListItem from "./CompanyListItem";

function CompanyList(props) {
  const companies = props.companies;
  const comapanyListItems = companies
    .map(company => <CompanyListItem  
      key={company.id}
      name={company.name}
      type={company.type}
      created_at={company.created_at}
      id={company.id}
    />);
  return <ul>{comapanyListItems}</ul>
}

export default CompanyList;