CREATE TABLE
  tenders (
    tender_id SERIAL PRIMARY KEY,
    tender_number VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    advert_date DATE NOT NULL,
    closing_date DATE NOT NULL,
    document_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW (),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW ()
  );

CREATE TABLE
  tender_results (
    tender_result_id SERIAL PRIMARY KEY,
    tender_number VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    closing_date DATE NOT NULL,
    document_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW (),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW ()
  );