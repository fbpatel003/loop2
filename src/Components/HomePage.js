import React from "react";
import Multiselect from "multiselect-react-dropdown";
import List from "./List";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        alldata : [],
    //   b_name: [],
    //   slug: [],
    //   vb_name: [],
      selectedb_name : [],
      selectedSlug : [],
      selectedVb_name : []
    };
  }

  componentDidMount = () => {
    fetch(
      "https://us-central1-arboreal-vision-339901.cloudfunctions.net/get_filter_values"
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        const tempb_name = [];
        const tempslug = [];
        const tempvb = [];
        res.data.forEach((element) => {
          tempb_name.push(element.b_name);
          tempslug.push(element.slug);
          tempvb.push(element.vb_name);
        });
        this.setState({
          ...this.state,
          alldata : [...res.data],
          b_name: [...tempb_name],
          slug: [...tempslug],
          vb_name: [...tempvb],
        });
      })
      .catch((error) => console.log(error));

    console.log(this.state.b_name);
  };

  onSelectB = (selectedList, selectedItem) => {
    this.setState({
        selectedb_name : selectedList
    })
    const tempslug = [];
    const tempvb = [];
    const index = 0;
    this.state.alldata.forEach(element => {
        if(element.b_name==this.state.selectedb_name[index]){
            tempslug.push(element.slug);
            tempvb.push(element.vb_name);
            index++;
        }
    });

    this.setState({
        ...this.state,
        selectedSlug: [...tempslug],
        selectedVb_name: [...tempvb],
    });
  };

onSelectSlug = (selectedList) =>{
    this.setState({
        selectedSlug : selectedList
    })
    this.filter();

    const tempb = [];
    const tempvb = [];
    const index = 0;
    this.state.alldata.forEach(element => {
        if(element.slug==this.state.selectedSlug[index]){
            tempb.push(element.b_name);
            tempvb.push(element.vb_name);
            index++;
        }
    });

    this.setState({
        ...this.state,
        selectedb_name: [...tempb],
        selectedVb_name: [...tempvb],
    });
  }

  onSelectVB = (selectedList) =>{
    this.setState({
        selectedVb_name : selectedList
    })
    const tempslug = [];
    const tempb = [];
    const index = 0;
    this.state.alldata.forEach(element => {
        if(element.vb_name==this.state.selectedVb_name[index]){
            tempslug.push(element.slug);
            tempb.push(element.b_name);
            index++;
        }
    });

    this.setState({
        ...this.state,
        selectedSlug: [...tempslug],
        selectedb_name: [...tempb],
    });

  }  

  filter = () => {
    this.state.selectedVb_name.forEach(element => {

    })
  };

  render() {

    console.log(this.state.alldata)
    console.log(this.state.b_name);
    console.log(this.state.slug);
    console.log(this.state.vb_name);
    console.log(this.state.selectedb_name);
    console.log(this.state.selectedSlug);
    console.log(this.state.selectedVb_name);

    return (
      <>
        <Multiselect
          id="B_NAME"
          options={this.state.b_name} // Options to display in the dropdown
          selectedValues={this.state.b_name[0]} // Preselected value to persist in dropdown
          onSelect={this.onSelectB} // Function will trigger on select event
        />
        <Multiselect
          id="SLUG"
          options={this.state.b_name} // Options to display in the dropdown
          selectedValues={this.state.b_name[0]} // Preselected value to persist in dropdown
          onSelect={this.onSelectSlug} // Function will trigger on select event
        />
        <Multiselect
          id="VB_NAME"
          options={this.state.b_name} // Options to display in the dropdown
          selectedValues={this.state.b_name[0]} // Preselected value to persist in dropdown
          onSelect={this.onSelectVB} // Function will trigger on select event
        />

        <br />
        <br />

        <List
          b_name={this.state.selectedb_name}
          slug={this.state.selectedSlug}
          vb_name={this.state.selectedVb_name}
        />
      </>
    );
  }
}

export default HomePage;
