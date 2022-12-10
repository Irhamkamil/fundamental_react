import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import NoteDetail from "../components/NotesDetail";
import { FoundNote } from "../utils/Data";

function DetailPageWrapper() {
  const navigate = useNavigate();
  const { id } = useParams();

  function homeNavigate() {
    navigate("/");
  }
  return <DetailPage id={id} navigate={homeNavigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: FoundNote(Number(this.props.id)),
    };
  }

  render() {
    if (this.state.notes == null) {
      return <p>Catatan tidak tersedia</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.notes} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
