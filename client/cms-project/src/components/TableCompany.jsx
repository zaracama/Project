export default function TableCompany({ company }) {
	return (
	  <>
		 <tr>
			<th scope="row">{company.id}</th>
			<td>{company.title}</td>
		 </tr>
	  </>
	);
 }